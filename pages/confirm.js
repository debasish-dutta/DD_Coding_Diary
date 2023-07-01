import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';


const ConfirmPage = () => {
    const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    if(!email) {
        console.log('Error');
        return toast.error('Please add email!!');
      } else if(!name){
        console.log('Error');
        return toast.error('Please add name!!');
      }
    try{
    const { data } = await axios.post('/api/registration', { name, phone, email, formType: 'confirm' });
    toast.success("Your newsletter subscription is confirmed.");
    router.push('/');
    } catch (err) {
        toast.error(
            err.response
          );
    }
    // Reset the form fields
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <div className="lg:px-10 lg:m-10 md:px-8 md:m-8 sm:px-4 sm:m-6 px-2 m-2">
  <Head>
    <title>Confirm Newsletter || DD Coding Diary</title>
  </Head>
  <section className="bg-white shadow-lg rounded-lg">
    <div className="container mx-auto flex flex-col items-center px-5 py-20 md:flex-row">
      <div className="mb-12 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pf-24">
        <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">Confirm Newsletter</h1>
        <form className="w-full max-w-lg" onSubmit={submitForm}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label htmlFor="name" className="block font-medium mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label htmlFor="phone" className="block font-medium mb-1">
                Phone:
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label htmlFor="email" className="block font-medium mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</div>

  );
};

export default ConfirmPage;
