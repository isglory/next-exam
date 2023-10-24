'use client';
import { useRef, useEffect } from 'react';

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

    useEffect(() => {
    const pc = new RTCPeerConnection(config);

    // 카메라 스트림 가져오기
    navigator.mediaDevices.getUserMedia({video: true, audio: true})
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

  }, []);

  return (
    <div>
      <video ref={localRef} autoPlay />
      <video ref={remoteRef} autoPlay />
    </div>
  );

}