import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../../index.css';
import { Link } from 'react-router-dom';

// Redux
import { getCurrentProfile } from '../../../actions/profile';
import { connect } from 'react-redux';
import Spinner from '../../layout/Spinner';

const AdminProfile = ({
 getCurrentProfile,
 auth: { user },
 profile: { profile, loading },
}) => {
 useEffect(() => {
  getCurrentProfile();
 }, [getCurrentProfile]);
 return loading && profile === null ? (
  <Spinner />
 ) : (
  <section className='d-flex justify-content-center'>
   <div className='dashboard my-3 mx-2 p-4'>
    <h1 className='card-title lead text-secondary'>Dashboard</h1>
    <p className='lead card-text'>
     <i className='fas fa-user'></i> Welcome {user && user.name}
    </p>
    {profile !== null ? (
     <>
      <Link to='/upload-course' className='btn btn-primary my-1'>
       Upload Course
      </Link>
     </>
    ) : (
     <>
      <p className='lead'>You have not setup a profile, please add some info</p>
      <Link to='/create-profile' className='btn btn-primary my-1'>
       Create Profile
      </Link>
     </>
    )}
   </div>
  </section>
 );
};

AdminProfile.propTypes = {
 getCurrentProfile: PropTypes.func.isRequired,
 auth: PropTypes.object.isRequired,
 profile: PropTypes.object.isRequired,
};

const mapStatetoProps = (state) => ({
 auth: state.auth,
 profile: state.profile,
});

export default connect(mapStatetoProps, { getCurrentProfile })(AdminProfile);
