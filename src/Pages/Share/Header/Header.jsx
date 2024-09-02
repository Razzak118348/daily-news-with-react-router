import logo from '../../../../src/assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center mt-8'>
           <img className='mx-auto' src={logo} alt="" />
           <p className='my-2 font-poppins text-[#706F6F] text-lg'>Jurnalism Without Fear or Facour</p>
           <p className='font-poppins text-xl'>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
           
          {/* moment.js theke moment install kore then moment use korte hobe tahole real time date dekhabe */}

        </div>
    );
};

export default Header;