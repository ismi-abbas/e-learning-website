// This is a upload course page
import React, { useState, useEffect } from 'react';
import Navbar from '../../layout/Navbar';
import Welcome from '../../layout/Welcome';
import axios from 'axios';

// // Connect with redux
// import { connect } from 'react-redux';
// import { setAlert } from '../../../actions/alert';
// import { upload } from '../../../actions/upload';
// import PropTypes from 'prop-types';
// import Alert from '../../../components/layout/Alert';

const UploadCourse = (props) => {
 const [singleFile, setSingleFile] = useState('');
 const [title, setTitle] = useState('');
 const [singleProgress, setSingleProgress] = useState(0);

 const SingleFileChange = (e) => {
  setSingleFile(e.target.files[0]);
  setSingleProgress(0);
 };

 const singleFileOptions = {
  onUploadProgress: (progressEvent) => {
   const { loaded, total } = progressEvent;
   const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
   setSingleProgress(percentage);
  },
 };

 const uploadSingleFile = async () => {
  const formData = new FormData();
  formData.append('file', singleFile);
  await singleFileUpload(formData, singleFileOptions);
  props.getsingle();
 };

 const singleFileUpload = async (data, options) => {
  try {
   await axios.post('/api/upload' + 'singleFile', data, options);
  } catch (error) {
   throw error;
  }
 };

 return (
  <div>
   <Navbar />
   <Welcome />
   <div className='container'>
    <div className='row'>
     <div className='col-md-6 m-auto'>
      <h1 className='text-center display-4 my-4'>Upload Course</h1>
      <form encType='multiprat.form-data'>
       <div className='custom-file mb-3'>
        <input
         type='file'
         name='file'
         id='file'
         className='custom-file-input'
         onChange={(e) => SingleFileChange(e)}
        />
        <label htmlFor='file' className='custom-file-label'></label>
       </div>
       <input
        type='submit'
        className='btn btn-primary justify-content-center'
        onClick={() => uploadSingleFile()}
       />
      </form>
     </div>
    </div>
   </div>
  </div>
 );
};

// UploadCourse.propTypes = {
//  setAlert: PropTypes.func.isRequired,
//  upload: PropTypes.func.isRequired,
//  isAuthenticated: PropTypes.bool,
// };

// const mapStateToProps = (state) => ({
//  isAuthenticated: state.auth.isAuthenticated,
// });

// export default connect(mapStateToProps, { setAlert, upload })(UploadCourse);
export default UploadCourse;
