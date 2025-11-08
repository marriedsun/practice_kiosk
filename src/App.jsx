import { useState } from 'react'
import './App.css'
import mainimg from '/Users/sunpark/Repository/homework_ts/kiosk/src/assets/loginpageimg.jpg';
import { useForm } from 'react-hook-form';

// React Hook Form, handleSubmit에 대해 검색 (https://wam6577.tistory.com/136)
// return 안에 div 여러개 추가하는방법을 검색(https://www.google.com/search?q=return+%EC%95%88%EC%97%90+div+%EC%B6%94%EA%B0%80&sca_esv=54da88b08537de17&rlz=1C5CHFA_enKR1182KR1182&sxsrf=AE3TifPiaAJJPU3YgZPYlUyKXmKZYioNaw%3A1762175134421&ei=nqgIafa7Gc2Pvr0Plf_noAY&ved=0ahUKEwj2gq33hdaQAxXNh68BHZX_GWQQ4dUDCBE&uact=5&oq=return+%EC%95%88%EC%97%90+div+%EC%B6%94%EA%B0%80&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIhhyZXR1cm4g7JWI7JeQIGRpdiDstpTqsIAyBRAhGKABMgUQIRigATIFECEYoAFInDlQAFj-N3AEeAGQAQGYAbABoAHDHKoBBDAuMjS4AQPIAQD4AQGYAhegAtUXqAIKwgIKECMYgAQYJxiKBcICCxAAGIAEGLEDGIMBwgIEEAAYA8ICCxAuGIAEGNEDGMcBwgIREC4YgAQYsQMY0QMYgwEYxwHCAgUQABiABMICCxAuGIAEGLEDGIMBwgIOEC4YgAQYsQMY0QMYxwHCAggQABiABBixA8ICBxAAGAMYjQbCAg0QIxgnGPgFGOoCGIsDwgIKECMYJxjqAhiLA8ICEBAjGIAEGCcYigUY6gIYiwPCAg0QIxiABBgnGIoFGOoCwgINECMY8AUYJxjJAhjqAsICChAjGPAFGCcYyQLCAgQQIxgnwgIHEAAYgAQYCsICChAAGIAEGEMYigXCAgUQLhiABMICBhAAGAUYHsICBhAAGAgYHsICCBAAGAUYDRgewgIIEAAYgAQYogTCAgUQABjvBcICCBAAGAgYDRgemAMG8QW9r44NzoRL3ZIHBDQuMTmgB-SWAbIHBDAuMTm4B78XwgcIMC44LjE0LjHIB18&sclient=gws-wiz-serp)
// useState 활용 코드 참고 (https://despiteallthat.tistory.com/217?utm_source=chatgpt.com)
// event.preventDefault 참고 (https://itconquest.tistory.com/entry/js-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%8F%99%EC%9E%91-%EB%A7%89%EA%B8%B0-eventpreventdefault-1)
function App() {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const onSubmit = (event)=>{
    event.preventDefault();
    if (id === '' && pw === '') {
      alert('아이디, 비밀번호를 입력해주세요')
  } else if (id === '') {
      alert('아이디를 입력해주세요')
  } else if (pw === '') {
      alert('패스워드를 입력해주세요')
  } else if (id === 'admin' && pw === '1234') {
      alert('로그인 되었습니다')
  } else {
      alert('아이디 또는 패스워드가 올바르지 않습니다')
  }
}

  return (
      //w-[50vw] 검색 (https://dduniverse.tistory.com/entry/Tailwind-w-screen%EA%B3%BC-w-full-%EB%B9%84%EA%B5%90)
      //css 전반적인 지식이 없어 하나하나 검색 예제페이지 Elements,Source에서 쓰인것들을 검색함(https://tailwindcss.com/docs/installation/using-vite)
<div className='fixed w-full h-full '>
  <div className='w-[50vw] fixed h-full top-0 bg-center mr-[5px] border-r-[1px] border-solid bg-ga-white'> 
    <img 
      //object-cover 에 대해 검색 (https://tailwindcss.com/docs/object-fit)
      //alt 에 대해 검색 (http://www.tcpschool.com/html-tag-attrs/img-alt)
      src={mainimg} 
      alt='img not found'
      className='object-cover w-full h-full'/>
  </div>
 <div className='pl-[50vw]'>
  <div className= 'w-[200px] my-[20%] mx-auto text-center'>
    <div className='font-bold text-[20px] flex items-center leading-none w-[200px] justify-center pb-[12px]'>
                        KIOSK 관리 시스템
    </div>
    {/* input Value,onSubmit,onChange 참고 (https://firstvalue.tistory.com/entry/11-React%ED%99%94%EB%A9%B4%EC%97%90%EC%84%9C-%EA%B0%81-%ED%95%AD%EB%AA%A9%EC%9D%98-Input-Value%EC%9D%84-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0) */}
      <form onSubmit={onSubmit}> 
        <p><input className='mb-[5px] w-full box-border py-[5px] px-[10px] outline-none resize-none rounded-[3px] border-[1px] border-solid border-[#CCC] text-[12px] text-[#333]' 
                  type='text'
                  name='user_id'
                  value={id}
                  placeholder='아이디를 입력하세요.'
                  onChange={(event)=> setId(event.target.value)}/>
        </p> 
        <p><input className='mb-[5px] w-full box-border py-[5px] px-[10px] outline-none resize-none rounded-[3px] border-[1px] border-solid border-[#CCC] text-[12px] text-[#333]' 
                  type='password' 
                  name='user_pw'
                  value={pw} 
                  placeholder='패스워드를 입력하세요.'
                  onChange={(event)=> setPw(event.target.value)}/>
        </p> 
        <p>
          <button type = 'submit'
                  className='w-full bg-[#333] text-[#FFF] inline-block font-bold box-border px-[15px] py-[10px] rounded-[3px] text-[12px]'
                  >
                Login
          </button>
        </p>  
      </form>
      <p className='text-[11px] text-[#999] px-[5px] py-[15px]'>
        Onebysystem</p>
  </div>
</div>
                    

  

</div>    
  )
}

export default App
