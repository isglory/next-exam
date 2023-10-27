'use client';
import { useRef, useEffect, useState } from 'react';

export default function CameraAi(){  

  const OCR_TARGET_ORIGIN = 'https://ocr.useb.co.kr';
  const OCR_URL = 'https://ocr.useb.co.kr/ocr.html';
  const OCR_LICENSE_KEY = 'FPkTBLFIa/Tn/mCZ5WKPlcuDxyb2bJVPSURXacnhj2d82wm39/tFIjCPpMsiXoPxGbN6G6l5gSLMBfwB6nwgIJZFWX0WlS1Jl49321wADP7yEhxE=';
  const OCR_RESOURCE_BASE_URL = 'https://ocr.useb.co.kr/';
  
  const [type, setType] =  useState("idcard");
  const [settings, setSettinh] = useState({});

  const AUTH_SERVER_INFO = {
    credential: {
      customer_id: parseInt('84'),
      username: 'kcuGDPG37Q',
      password: '3uR7Pc2BwMa5D$u',
    },
    baseUrl: 'https://common-api.useb.co.kr',
  };

  const OCR_SERVER_BASE_URL = 'https://quram.useb.co.kr';
    useEffect(() => {
      debugger;
      const ocrIframe = document.getElementById('resolution-simulation-iframe');
      ocrIframe.onload = function () {
        let params = {
          ocrType: type,
          settings: {
            ...settings,
            licenseKey: OCR_LICENSE_KEY,
            resourceBaseUrl: OCR_RESOURCE_BASE_URL,
            authServerInfo: AUTH_SERVER_INFO,
            ocrServerBaseUrl: OCR_SERVER_BASE_URL,
            useAutoSwitchToServerMode: true,
            useForceCompleteUI: true,
            captureButtonStyle: {
              stroke_color: '#ffffff',
              base_color: '#5e8fff' // 버튼 색상
            },
          },
        };
    
        let encodedParams = btoa(encodeURIComponent(JSON.stringify(params)));
        ocrIframe.contentWindow.postMessage(encodedParams, OCR_TARGET_ORIGIN);
        
        ocrIframe.onload = null;
      };
    
      ocrIframe.src = OCR_URL;

    },[]);

  return (
    <section>
        <iframe
          id="resolution-simulation-iframe"
          className="resolution-simulation-iframe"
          allow="camera"
        ></iframe>
    </section>
  );

}