// import React from 'react';
//
// function App() {
//   const course = [
//     {
//       id: 1,
//       name: 'Half Stack application development',
//       parts: [
//         {
//           name: 'Zero to JavaScript King',
//           exercises: 10,
//           id: 1
//         },
//         {
//           name: 'Fundamentals of React',
//           exercises: 5,
//           id: 2
//         },
//         {
//           name: 'Node mastery Class',
//           exercises: 7,
//           id: 3
//         }
//       ]
//     },
//     {
//       name: 'Node.js',
//       id: 2,
//       parts: [
//         {
//           name: 'Routing',
//           exercises: 3,
//           id: 4
//         },
//         {
//           name: 'Middlewares',
//           exercises: 7,
//           id: 5
//         }
//       ]
//     }
//   ]
//   return (
//     <div>
//       <h1>{course.name}</h1>
//       <hr />
//       {course.map((cour, i) => (
//         <Course cour={cour} key={i} />
//       ))}
//     </div>
//   );
// }
//
// const Course = ({ cour }) => {
//   const getParts = cour?.parts?.map(part => part?.exercises)
//   const sum = getParts?.reduce((value1, value2) => value1 + value2, 0);
//   return (
//     <div>
//       <div>
//         <p>{cour.name}</p>
//         {cour?.parts?.map((part, i) => (
//           <span key={i}>
//             <h5>{part?.name}</h5>
//             <p>{part?.exercises}</p>
//           </span>
//         ))}
//         <span>
//           <h5>Total Exercises:</h5>
//           <p>{sum}</p>
//         </span><hr />
//       </div>
//     </div>
//   )
// }
//
// export default App;

import React from 'react';

function ExerciseA(props) {
  /* part of exercise 1 introduction to react */

  // const courseName = 'Zero to hero fullstack course';
  // const part1 = 'No HTML to HTML worrior';
  // const exercise1 = 10;
  // const part2 = 'No CSS to CSS King';
  // const exercise2 = 15;
  // const part3 = 'No React to React worrior';
  // const exercise3 = 20;

  /* completed exercise 1.4 part of JavaScript */
  // const parts = [
  //   {
  //     name: 'No HTML to HTML worrior',
  //     exercises: 10
  //   },
  //   {
  //     name: 'No CSS to CSS King',
  //     exercises: 15
  //   },
  //   {
  //     name: 'No React to React worrior',
  //     exercises: 20
  //   }
  // ]

  /* completed exercise 1.5 part of JavaScript */
  const course = {
    name: 'Zero to hero fullstack course',
    parts: [
      {
        name: 'No HTML to HTML worrior',
        exercises: 10
      },
      {
        name: 'No CSS to CSS King',
        exercises: 15
      },
      {
        name: 'No React to React worrior',
        exercises: 20
      }
    ]
  }
  return (
      <div>
        <Header course={course.name} />
        {course.parts.map(part => (
            <>
              <Content part={part} />
              <Total part={part} />
            </>
        ))}
      </div>
  );
}

const Header = (props) => {
  return (
      <>
        <h2>{props.course}</h2><br />
      </>
  )
}
const Content = (props) => {
  return (
      <>
        <h4>{props.part.name}</h4>
        <p>{props.part.exercises}</p>
        <hr />
      </>
  )
}
const Total = (props) => {
  return (
      <>
        <p>The number of exercises in total: {props.part.exercises + props.part.exercises + props.part.exercises}</p>
      </>
  )
}

export default ExerciseA;
