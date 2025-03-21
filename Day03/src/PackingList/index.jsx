function Item({ name, isPacked }) {
    return (
        <li>{name} {isPacked ? '✅' : ''}</li>
    )
  }
  
  
  export default function PackingList() {
    const items = [
        {
            name :  "Space suit",
            status : true
        },
       {
            name : "Helmet with a golden leaf",
            status : true
       },
       {
            name : "Photo of Tam",
            status : false
       }
    ]
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
         {items.map(item=>
            <Item name={item.name} key={item.name} isPacked={item.status} />
         )}
        </ul>
      </section>
    );
  }