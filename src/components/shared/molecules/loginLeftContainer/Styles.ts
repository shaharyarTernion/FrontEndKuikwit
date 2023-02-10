import { makeStyles } from 'tss-react/mui'
// import logo from '../../../../assets/images/BG.svg';

const useStyles = makeStyles()((theme) => ({
  root: {
    // position: 'absolute',
    // display: 'flex',
    alignItems: 'center',
    height: '100vh',
    // background: url(`C:/project/new-project/kuikwit-frontend/src/assets/images/BG.svg`)
    background:
      'linear-gradient(219.01deg, #4D1277 0%, #160125 100%),linear-gradient(223.19deg, #FFFFFF -14.08%, rgba(255, 255, 255, 0) 97.43%),repeating-linear-gradient(216.04deg, rgba(0, 0, 0, 0) 46.23%, rgba(6, 6, 6, 0.57) 80.76%, rgba(14, 13, 14, 0.68) 82.92%, rgba(28, 26, 27, 0.86) 88.68%, rgba(36, 33, 34, 0.97) 94.43%, #272425 104.5%),repeating-linear-gradient(259.89deg, rgba(0, 0, 0, 0) 53.81%, rgba(6, 6, 6, 0.57) 90.15%, rgba(14, 13, 14, 0.68) 92.42%, rgba(28, 26, 27, 0.86) 98.48%, rgba(36, 33, 34, 0.97) 104.53%, #272425 115.13%),repeating-linear-gradient(259.89deg, rgba(0, 0, 0, 0) 53.81%, rgba(6, 6, 6, 0.57) 90.15%, rgba(14, 13, 14, 0.68) 92.42%, rgba(28, 26, 27, 0.86) 98.48%, rgba(36, 33, 34, 0.97) 104.53%, #272425 115.13%),repeating-linear-gradient(259.89deg, rgba(0, 0, 0, 0) 53.81%, rgba(6, 6, 6, 0.57) 90.15%, rgba(14, 13, 14, 0.68) 92.42%, rgba(28, 26, 27, 0.86) 98.48%, rgba(36, 33, 34, 0.97) 104.53%, #272425 115.13%),repeating-linear-gradient(323.68deg, rgba(0, 0, 0, 0) 55.88%, rgba(6, 6, 6, 0.48) 62.7%, rgba(15, 14, 14, 0.63) 63.12%, rgba(28, 26, 27, 0.84) 64.26%, rgba(36, 33, 34, 0.96) 65.4%, #272425 67.38%),repeating-linear-gradient(259.89deg, rgba(0, 0, 0, 0) 53.81%, rgba(6, 6, 6, 0.57) 90.15%, rgba(14, 13, 14, 0.68) 92.42%, rgba(28, 26, 27, 0.86) 98.48%, rgba(36, 33, 34, 0.97) 104.53%, #272425 115.13%),repeating-linear-gradient(223.19deg, #FFFFFF -14.08%, rgba(255, 255, 255, 0) 97.43%),repeating-linear-gradient(223.19deg, #FFFFFF -14.08%, rgba(255, 255, 255, 0) 97.43%),repeating-linear-gradient(223.19deg, rgba(255, 255, 255, 0) -14.08%, rgba(255, 255, 255, 0.44) 36.1%, #FFFFFF 97.43%),repeating-linear-gradient(223.19deg, #FFFFFF -14.08%, rgba(255, 255, 255, 0) 97.43%)',
  },
  heading: {  
    fontStyle: 'normal',
    fontSize: '42px',
    lineHeight: '63px',
    fontWeight: 600,
    color: '#fff',
    height: '63px',
    width: '550px',
    margin: '220px 70px 0px 60px',
  },
  text: {
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '27px',
    color: '#fff',
    // height: '81px',
    width: '545px',
    margin: '0px 70px 0px 60px',
  },
  green: {
    color: theme.palette.secondary.main,
    fontWeight: 500,
    fontSize: '18px',
  },
}))

export default useStyles
