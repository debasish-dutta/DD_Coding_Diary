import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export const colors = {
    white: {
      base: '#fff',
      light: '#f0f0f0',
      grey: '#cecece',
      dark: '#a0afd7',
    },
    black: {
      base: '#333438',
      light: '#4b4e57',
      blue: '#2e3246',
    },
    primary: {
      base: '#3498db',
      light: '#3e5fbc',
      dark: '#284187',
    },
    background: {
      light: '#3e5fbc',
      dark: '#284187',
    },
  };


const gradient = {
    // eslint-disable-next-line
    leftToRight: `linear-gradient(-45deg, ${colors.background.light} 0%, ${colors.background.dark} 100%)`,
    // eslint-disable-next-line
    rightToLeft: `linear-gradient(45deg, ${colors.background.light} 0%, ${colors.background.dark} 100%)`,
  };

const breakpoints = {
  xs: '400px',
  s: '600px',
  m: '900px',
  l: '1200px',
};

const Wrapper = styled.header`
  margin-bottom: 40px;
  -webkit-clip-path: polygon(100% 0, 0 0, 0 70%, 50% 100%, 100% 70%);
  clip-path: polygon(100% 0, 0 0, 0 70%, 50% 100%, 100% 70%);
  @media (max-width: ${breakpoints.s}) {
    -webkit-clip-path: polygon(100% 0, 0 0, 0 90%, 50% 100%, 100% 90%);
    clip-path: polygon(100% 0, 0 0, 0 90%, 50% 100%, 100% 90%);
  }
  background: ${gradient.rightToLeft};
  height: 250px;
  @media (max-width: ${breakpoints.m}) {
    height: 250px;
  }
  @media (max-width: ${breakpoints.s}) {
    height: 200px;
  }
  position: relative;
  overflow: hidden;
`;


const Poly = ({ title, cover }) => (

    <Wrapper>
        {cover && 
      <img src={cover}  className='w-full blur-[1.5px] object-fill'/> }
        <h1 className='flex uppercase font-extrabold text-lg sm:text-2xl lg:text-3xl items-center justify-center h-full z-[10000] text-white'>{title}</h1>
        {/* <h3>{date}</h3> */}
  
        {/* {children && <p>{children}</p>} */}
    </Wrapper>
  );
const polyClip = {
    clipPath: "polygon(100% 0, 0 0, 50% 100%)",
  };
  
//   const Poly = ({ title, featuredImage}) => {
//       const bgIm = {
//         backgroundImage: `url('${featuredImage.url}')`,
//         clipPath: "polygon(100% 0, 0 0, 50% 100%)",
//       }
//       return (
//     <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover inline-block w-full h-[15rem]" style={bgIm} >
//     <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-30 from-blue-300 via-blue-400 to-blue-500 w-full h-[15rem]" style={polyClip} >
//     <div className="flex flex-col rounded-lg items-center justify-center absolute w-full h-full ">
//         <p className="text-white font-bold text-3xl text-center">{title}</p>
//     </div>
//     </div>
//     </div>
//   )
// }

export default Poly

Poly.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.bool,
    ]),
};

Poly.defaultProps = {
    children: false,
    cover: false,
    date: false,
    title: false,
  };