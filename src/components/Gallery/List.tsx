import Panel from './Panel.jsx';

export default function List({ data }) {

  return (    
    <>
      {data.map( (each, index) => {
        return (
          <Panel 
            key={ index }
            data={ each } />
        )}
      )}
    </>        
  );
}