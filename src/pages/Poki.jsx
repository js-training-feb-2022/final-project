// import PokeCard from '../components/Card';

// export default function Poki({listDetails, isItemPushed}) {
//   return (
//     <>
//       <h1 className="title">Pokemon personal card</h1>
//       <div className='card flex card_details'>
//         <img className="card_img" src={listDetails.sprites.other['official-artwork'].front_default}/>
//         <div>
//           <span className='card_id'>id: {listDetails.id}</span>
//           <p className='card_name'>{listDetails.name}</p>
//           <p className="card_details">abilities: {listDetails.abilities[0].ability.name}, {listDetails.abilities[1].ability.name}</p>
//           <p className="card_details">types: {listDetails.types[0].type.name}, {listDetails.types[1].type.name}</p>
//           <span className="card_details">weight: {listDetails.weight}</span>
//           <span className="card_details">status: </span>
//           <span className="card_details">capture date: {true ? `${dateCatch()}` : null}</span>
//         </div>         
//       </div> 
//     </>    
   
//         {listItems.map((item, index) => (
//           <Card 
//             name={item.name} 
//             id={index+1}
//             key={index}
//             onAddCatch={(obj) => onAddToCatched(obj)}
//             isBtnChange={isItemAdded}
//           />  
//         ))}   
 
// }