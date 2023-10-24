'use client';
import { useRef, useEffect, useState } from 'react';

const config = { 
    iceServers: [
      {
        urls: 'stun:stun1.l.google.com:19302'
      }
    ]
};

export default function Draw(){
    const localRef = useRef();
    const remoteRef = useRef();
    // 사각형 그리기 state
    const [rect, setRect] = useState({
      x: 0, y: 0, width: 0, height: 0  
    });

    useEffect(() => {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');    
      const pc = new RTCPeerConnection(config);
      const backCameraId = navigator.mediaDevices.enumerateDevices()
        .then(devices => 
          devices.filter(d => d.kind === 'videoinput' && d.facing === 'environment').deviceId
      );


    // 카메라 스트림 가져오기
    navigator.mediaDevices.getUserMedia({
      video: {
        optional: [{sourceId: backCameraId}]
      }
      })
      .then(stream => {
        localRef.current.srcObject = stream;
        pc.addStream(stream);
      });

    // 상대방의 스트림 받기  
    pc.onaddstream = e => {
      remoteRef.current.srcObject = e.stream;
    };

    // 서로 Offer, Answer 교환
    pc.onnegotiationneeded = () => {
      pc.createOffer().then(offer => pc.setLocalDescription(offer)) 
        .then(); 
    }

    // ICE 후보 수집
    pc.onicecandidate = () => { /* 생략 */ };

    // 사각형 그리기
    ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);

  }, [rect]);

  return (
    <div style={{position: 'absolute'}}>
      <video ref={localRef} autoPlay /> 
      <canvas 
        id="canvas"
        width="200"
        height="200"
        style={{
          position: 'absolute',
          top: '50%', 
          left: '50%',
          transform: 'translate(-50%, -50%)',
          border: '1px solid white'
        }}
      />
      <video ref={remoteRef} autoPlay />
    </div>
  );

}