import { useState } from 'react'
import './App.css'
import mainimg from '/Users/sunpark/Repository/homework_ts/kiosk/src/assets/loginpageimg.jpg';

// return 안에 div 여러개 추가하는방법을 검색해봤음(https://www.google.com/search?q=return+%EC%95%88%EC%97%90+div+%EC%B6%94%EA%B0%80&sca_esv=54da88b08537de17&rlz=1C5CHFA_enKR1182KR1182&sxsrf=AE3TifPiaAJJPU3YgZPYlUyKXmKZYioNaw%3A1762175134421&ei=nqgIafa7Gc2Pvr0Plf_noAY&ved=0ahUKEwj2gq33hdaQAxXNh68BHZX_GWQQ4dUDCBE&uact=5&oq=return+%EC%95%88%EC%97%90+div+%EC%B6%94%EA%B0%80&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIhhyZXR1cm4g7JWI7JeQIGRpdiDstpTqsIAyBRAhGKABMgUQIRigATIFECEYoAFInDlQAFj-N3AEeAGQAQGYAbABoAHDHKoBBDAuMjS4AQPIAQD4AQGYAhegAtUXqAIKwgIKECMYgAQYJxiKBcICCxAAGIAEGLEDGIMBwgIEEAAYA8ICCxAuGIAEGNEDGMcBwgIREC4YgAQYsQMY0QMYgwEYxwHCAgUQABiABMICCxAuGIAEGLEDGIMBwgIOEC4YgAQYsQMY0QMYxwHCAggQABiABBixA8ICBxAAGAMYjQbCAg0QIxgnGPgFGOoCGIsDwgIKECMYJxjqAhiLA8ICEBAjGIAEGCcYigUY6gIYiwPCAg0QIxiABBgnGIoFGOoCwgINECMY8AUYJxjJAhjqAsICChAjGPAFGCcYyQLCAgQQIxgnwgIHEAAYgAQYCsICChAAGIAEGEMYigXCAgUQLhiABMICBhAAGAUYHsICBhAAGAgYHsICCBAAGAUYDRgewgIIEAAYgAQYogTCAgUQABjvBcICCBAAGAgYDRgemAMG8QW9r44NzoRL3ZIHBDQuMTmgB-SWAbIHBDAuMTm4B78XwgcIMC44LjE0LjHIB18&sclient=gws-wiz-serp)

function App() {
  return (
// 이미지 소스 크기설정에서 w-[50vw]가 무슨뜻인지 검색해봤음(https://dduniverse.tistory.com/entry/Tailwind-w-screen%EA%B3%BC-w-full-%EB%B9%84%EA%B5%90)
 <div>
    
<div className="w-[50vw] fixed h-full top-0 bg-center mr-[5px] border-r-[1px] border-solid bg-ga-white">
    <img 
      src={mainimg} 
      //object-cover 에 대해 검색해봤음(https://tailwindcss.com/docs/object-fit)
      className="object-cover w-full h-full"/>
  </div>
  

</div>    
  )
}

export default App
