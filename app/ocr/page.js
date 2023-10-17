'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Tesseract from 'tesseract.js';``

const Ocr = () => {
  const [text, setText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const recognizeText = async () => {
    if (!selectedFile) {
      alert('이미지 파일을 선택하세요.');
      return;
    }

    const { data } = await Tesseract.recognize(selectedFile, 'kor');
    setText(data.text);
  };

/**
 * <div>
      <h1>Tesseract.js를 사용한 이미지 텍스트 인식</h1>
      <div>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={recognizeText}>텍스트 추출</button>
      </div>
      <div>
        <h2>인식된 텍스트:</h2>
        <pre>{text}</pre>
      </div>
    </div>
 */

  return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                {/* <Image 
                    className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" 
                    width={720}
                    height={600}
                    alt="hero" 
                    src="https://dummyimage.com/720x600"
                >
                </Image> */}
                <div
                    className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" 
                    width={720}
                    height={600}
                >
                    <h2>인식된 텍스트:</h2>
                    <pre>{text}</pre>
                </div>
                <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">이미지 텍스트 인식</h1>
                <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                <div className="flex justify-center">
                    <button onClick={recognizeText} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">텍스트 추출</button>
                    <input type="file" accept="image/*" onChange={handleFileChange} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"/>
                    <button >Button</button>
                </div>
                </div>
            </div>
        </section>
        )
}

export default Ocr;
