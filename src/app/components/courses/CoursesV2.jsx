'use client'

import Course from './Course'
import titleStyles from './title.module.css'
import CoursesData from './courses.json'
import { useEffect, useState } from 'react'
import { IconDownArrow } from './Icons'



const stylesBG = {
  opacity: '0.8',
  backgroundColor: '#aca49c',
  background: 'linear-gradient(135deg, #13140e55 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(225deg, #13140e 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(315deg, #13140e55 25%, transparent 25%) 0px 0/ 20px 20px, linear-gradient(45deg, #13140e 25%, #aca49c 25%) 0px 0/ 20px 20px'
}



const getCourses = (index, nCoursesAdd) => (
  CoursesData.slice(
    index,
    index + nCoursesAdd
  ).map(
    data => (
      <Course
        key={ Math.random() }
        data={ data }
      />
    )
  )
)




const CoursesV2 = () => {
  
  const [
    coursesView,
    setCoursesView
  ] = useState(getCourses(0, 3))

  const [
    indexCourse,
    setIndexCourse
  ] = useState(3)

  const [
    remainingCourses,
    setRemainingCourses
  ] = useState()


  useEffect(() => {
    setRemainingCourses(
      CoursesData.length - indexCourse
    )
  }, [indexCourse])





  const processingAddingCourses = () => {
    // cuantos añadir
    let nCoursesAdd =
      remainingCourses >= 3 ?
        3 : remainingCourses

    setCoursesView(
      prevState => (
        [
          ...prevState,
          ...getCourses(
            indexCourse,
            nCoursesAdd
          )
        ]
      )
    )

    setIndexCourse( prevState => prevState + nCoursesAdd )
  }

  return (  
    <section
      id='Courses'
      className='container mt-12 py-8 rounded-xl bg-[#aca49c] relative'
      style={ stylesBG } 
    >
      <header className={ titleStyles.wrapper }>
        <div className={ `${titleStyles.top} ` }>
          Cursos
        </div>
        <div 
          className={ `${titleStyles.bottom} translate-x-[-0.02em]`}
          aria-hidden={ true }
        >
          Cursos
        </div>
      </header>

      
      <div className="bg-[#fff9] my-8 backdrop-blur-[1px] shadow-xl">
        <p className='lg:w-3/4 xl:w-2/3 mx-auto py-8 px-6 text-justify italic'>
          EL <b>CERTIFICADO</b> DEL CENTRO DE INSTRUCCIÓN DE AERONÁUTICA CIVIL PARA <b>MECÁNICOS AERONÁUTICOS</b>, EXPEDIDO CONFORME DISPOSICIÓN NÚMERO <b>214/2015</b>, ESTA LIMITADO A LOS CURSOS PARA EL <b>MANTENIMIENTO DE AERONAVES</b> QUE SE DETALLAN A CONTINUACIÓN:
        </p>  
      </div>
      
      <div
        className='mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-12 p-6 relative'  
      >
        {
          coursesView
        }
      </div>
  
      {
        remainingCourses !== 0 ? (
          <div
            className='w-full h-24 absolute bottom-0 left-0 flex items-center justify-center bg-[#000a]'
            style={ { background: 'linear-gradient(#000a, #000d 25%, #000f 75%)' } }
          >
            
            <button
              className='w-24 h-24 mt-4 animate-bounce'
              onClick={processingAddingCourses}
            >
              <IconDownArrow />
            </button>
          </div>
        ) : null
      }
    </section>
  )
}

export default CoursesV2