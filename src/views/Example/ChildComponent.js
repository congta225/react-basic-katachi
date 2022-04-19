import React from "react";

// class ChildComponent extends React.Component {

//   render() {
//     console.log('>>>Check props: ', this.props)
//     // let name = this.props.name;
//     // let age = this.props.age;
//     let a ='';
//     let {name, age, address, arrJobs} = this.props;
//     return (
//       <>
//         <div className="job-lists">
//           {
//            a=  arrJobs.map((item, index) =>{
//               return (
//                 <div key={item.id}>
//                   {item.title} - {item.salary}
//                 </div>
//               )
//             })
            
//           }
//           {console.log('>>>> check map array: ', a)}
//         </div>
//       </>
//     );
//   }
// }

const ChildComponent = (props) =>{
  let {arrJobs} = props;
    return (
      <>
        <div className="job-lists">
          {
           arrJobs.map((item, index) =>{
              return (
                <div key={item.id}>
                  {item.title} - {item.salary}
                </div>
              )
            })
            
          }
          
        </div>
      </>
    )
}

export default ChildComponent;
