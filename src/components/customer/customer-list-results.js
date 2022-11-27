
import PropTypes from 'prop-types';


export const CustomerListResults = () => {
 
  return (
   <section className='squad'>
    <div className='container'>
      <div className='row'>
        <div className='team-1'>
          <h1>SEREIL KILLER</h1>
          
        </div>
        <div className='team-2'>
          <h1>GOLDEN KNIGHTS</h1>
        </div>
        
      </div>
      
    </div>
   </section>
   
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};
