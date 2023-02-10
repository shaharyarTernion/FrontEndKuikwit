import React from 'react'
import useStyles from './Styles';
import { Box } from '@mui/material'
import SvgIcon from '@mui/material/SvgIcon';

const Logo: React.FC = () => {
    const { classes } = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <SvgIcon className={classes.logo}>
                    <svg
                        width={148}
                        height={33}
                        viewBox="0 0 148 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"

                    >
                        <path
                            d="M53.64 15.92l4.752 6.15c.682.9.477 2.049-.513 2.722-.375.255-.822.419-1.232.419a2.064 2.064 0 01-1.643-.832l-4.173-5.414-2.222 2.432v1.732c0 1.182-.96 2.048-2.259 2.048-1.298 0-2.186-.866-2.186-2.048V4.3c0-1.182.954-2.048 2.259-2.048 1.304 0 2.186.866 2.186 2.048v11.146l5.538-6.082c.41-.481.99-.708 1.54-.708.477 0 .99.159 1.4.515.888.707 1.027 1.856.242 2.722l-3.69 4.034v-.006zM62.504 8.65c1.298 0 2.222.866 2.222 2.048v7.078c0 2.37 1.468 3.587 3.587 3.587 2.259 0 3.932-1.409 3.932-3.91v-6.755c0-1.182.924-2.048 2.222-2.048s2.222.866 2.222 2.048v12.425c0 1.182-.924 2.048-2.222 2.048s-2.222-.866-2.222-2.048v-.255c-.99 1.567-3.147 2.467-5.333 2.467-3.28 0-6.63-2.082-6.63-7.367v-7.27c0-1.182.923-2.048 2.222-2.048zM81.738 1.414c1.468 0 2.567.99 2.567 2.399s-1.093 2.404-2.567 2.404c-1.473 0-2.56-.99-2.56-2.404 0-1.415 1.093-2.399 2.56-2.399zm-2.222 9.284c0-1.182.954-2.048 2.258-2.048 1.305 0 2.187.866 2.187 2.048v12.424c0 1.183-.954 2.049-2.259 2.049-1.304 0-2.186-.866-2.186-2.049V10.698zM96.28 15.92l4.753 6.15c.682.9.477 2.049-.514 2.722-.374.255-.82.419-1.232.419a2.064 2.064 0 01-1.642-.832l-4.173-5.414-2.223 2.432v1.732c0 1.182-.954 2.048-2.258 2.048-1.305 0-2.186-.866-2.186-2.048V4.3c0-1.182.954-2.048 2.258-2.048 1.305 0 2.186.866 2.186 2.048v11.146l5.538-6.082c.41-.481.99-.708 1.54-.708.477 0 .99.159 1.401.515.888.707 1.027 1.856.242 2.722l-3.69 4.034v-.006zM119.212 18.58l2.289-8.425c.241-.928 1.057-1.505 2.017-1.505.241 0 .477.034.719.097 1.232.35 1.848 1.442 1.467 2.59l-3.895 12.267c-.272.9-1.262 1.567-2.325 1.567-1.063 0-2.017-.64-2.361-1.54l-3.588-8.933-3.587 8.934c-.344.894-1.365 1.539-2.428 1.539-1.062 0-1.98-.674-2.258-1.567l-3.895-12.266c-.375-1.154.241-2.24 1.467-2.591.242-.063.477-.097.719-.097.96 0 1.775.577 2.017 1.505l2.289 8.425 3.382-8.453c.344-.866 1.262-1.471 2.288-1.471 1.027 0 1.951.611 2.289 1.471l3.382 8.452h.012zM130.824 1.414c1.468 0 2.567.99 2.567 2.399s-1.093 2.404-2.567 2.404c-1.473 0-2.56-.99-2.56-2.404 0-1.415 1.093-2.399 2.56-2.399zm-2.222 9.284c0-1.182.954-2.048 2.258-2.048 1.305 0 2.187.866 2.187 2.048v12.424c0 1.183-.955 2.049-2.259 2.049-1.304 0-2.186-.866-2.186-2.049V10.698zM139.448 8.905V6.15c0-1.183.96-2.048 2.258-2.048 1.299 0 2.186.865 2.186 2.048v2.755h2.054c1.195 0 2.053.798 2.053 1.952s-.858 1.923-2.053 1.923h-2.054v10.342c0 1.183-.96 2.049-2.258 2.049-1.299 0-2.186-.866-2.186-2.049V12.78h-1.504c-1.196 0-2.053-.797-2.053-1.951 0-1.155.857-1.924 2.053-1.924h1.504z"
                            fill="#fff"
                        />
                        <path
                            d="M39.456.034L33.87 2.396l-10.07 10.496 5.199 2.561L11.64 28.335l6.655-2.78a3.22 3.22 0 013.172.39l2.156 1.628c.358.272.89.131 1.058-.278l1.782-4.47a2.997 2.997 0 011.512-1.59l4.782-2.27c.52-.248.914-.679 1.101-1.2L39.979.487c.089-.25-.118-.487-.365-.487a.36.36 0 00-.158.034z"
                            fill="url(#paint0_linear_693_8244)"
                        />
                        <path
                            d="M7.128 13.704a2.121 2.121 0 00-1.2 1.271L.02 32.518c-.102.303.22.578.526.45l3.464-1.446 10.85-11.308-5.2-2.562L25.38 5.988 7.13 13.704z"
                            fill="url(#paint1_linear_693_8244)"
                        />
                        <path xmlns="http://www.w3.org/2000/svg" d="M53.6393 15.9208L58.3921 22.0707C59.0745 22.9702 58.8691 24.1187 57.8787 24.792C57.5043 25.0466 57.0574 25.2106 56.6468 25.2106C56.0308 25.2106 55.4148 24.9221 55.0042 24.379L50.8312 18.9646L48.6088 21.3974V23.1286C48.6088 24.3111 47.6486 25.1767 46.3502 25.1767C45.0518 25.1767 44.1641 24.3111 44.1641 23.1286V4.30002C44.1641 3.11757 45.1182 2.25195 46.4227 2.25195C47.7271 2.25195 48.6088 3.11757 48.6088 4.30002V15.4456L54.1466 9.3636C54.5573 8.8827 55.137 8.6564 55.6866 8.6564C56.1637 8.6564 56.677 8.81481 57.0876 9.17124C57.9754 9.87845 58.1143 11.0269 57.3292 11.8926L53.6393 15.9265V15.9208Z" fill="white"/>
                        <path xmlns="http://www.w3.org/2000/svg" d="M62.5036 8.65039C63.802 8.65039 64.726 9.51601 64.726 10.6985V17.7762C64.726 20.1467 66.1935 21.3631 68.3132 21.3631C70.5718 21.3631 72.2446 19.9543 72.2446 17.4537V10.6985C72.2446 9.51601 73.1686 8.65039 74.467 8.65039C75.7654 8.65039 76.6893 9.51601 76.6893 10.6985V23.1226C76.6893 24.3051 75.7654 25.1707 74.467 25.1707C73.1686 25.1707 72.2446 24.3051 72.2446 23.1226V22.868C71.2542 24.4352 69.0983 25.3348 66.9121 25.3348C63.6329 25.3348 60.2812 23.2528 60.2812 17.9685V10.6985C60.2812 9.51601 61.2052 8.65039 62.5036 8.65039V8.65039Z" fill="white"/>
                        <path xmlns="http://www.w3.org/2000/svg" d="M81.7383 1.41406C83.2058 1.41406 84.3049 2.40415 84.3049 3.8129C84.3049 5.22165 83.2118 6.2174 81.7383 6.2174C80.2648 6.2174 79.1777 5.22731 79.1777 3.8129C79.1777 2.39849 80.2708 1.41406 81.7383 1.41406V1.41406ZM79.5159 10.6982C79.5159 9.5158 80.4701 8.65018 81.7745 8.65018C83.079 8.65018 83.9607 9.5158 83.9607 10.6982V23.1224C83.9607 24.3049 83.0065 25.1705 81.7021 25.1705C80.3976 25.1705 79.5159 24.3049 79.5159 23.1224V10.6982Z" fill="white"/>  
                        <path xmlns="http://www.w3.org/2000/svg" d="M96.2799 15.9208L101.033 22.0707C101.715 22.9702 101.51 24.1187 100.519 24.792C100.145 25.0466 99.6981 25.2106 99.2874 25.2106C98.6714 25.2106 98.0554 24.9221 97.6448 24.379L93.4718 18.9646L91.2494 21.3974V23.1286C91.2494 24.3111 90.2953 25.1767 88.9908 25.1767C87.6864 25.1767 86.8047 24.3111 86.8047 23.1286V4.30002C86.8047 3.11757 87.7589 2.25195 89.0633 2.25195C90.3677 2.25195 91.2494 3.11757 91.2494 4.30002V15.4456L96.7872 9.3636C97.1979 8.8827 97.7776 8.6564 98.3272 8.6564C98.8043 8.6564 99.3176 8.81481 99.7282 9.17124C100.616 9.87845 100.755 11.0269 99.9698 11.8926L96.2799 15.9265V15.9208Z" fill="white"/>
                        <path xmlns="http://www.w3.org/2000/svg" d="M119.212 18.5795L121.501 10.1553C121.742 9.22746 122.558 8.65039 123.518 8.65039C123.759 8.65039 123.995 8.68434 124.237 8.74657C125.469 9.09734 126.085 10.1893 125.704 11.3378L121.809 23.6035C121.537 24.5031 120.547 25.1707 119.484 25.1707C118.421 25.1707 117.467 24.5314 117.123 23.6318L113.535 14.6984L109.948 23.6318C109.604 24.5257 108.583 25.1707 107.52 25.1707C106.458 25.1707 105.54 24.4974 105.262 23.6035L101.367 11.3378C100.992 10.1836 101.608 9.09734 102.834 8.74657C103.076 8.68434 103.311 8.65039 103.553 8.65039C104.513 8.65039 105.328 9.22746 105.57 10.1553L107.859 18.5795L111.241 10.127C111.585 9.26142 112.503 8.65605 113.529 8.65605C114.556 8.65605 115.48 9.26707 115.818 10.127L119.2 18.5795H119.212Z" fill="white"/>   
                        <path xmlns="http://www.w3.org/2000/svg" d="M130.824 1.41406C132.292 1.41406 133.391 2.40415 133.391 3.8129C133.391 5.22165 132.298 6.2174 130.824 6.2174C129.351 6.2174 128.264 5.22731 128.264 3.8129C128.264 2.39849 129.357 1.41406 130.824 1.41406V1.41406ZM128.602 10.6982C128.602 9.5158 129.556 8.65018 130.86 8.65018C132.165 8.65018 133.047 9.5158 133.047 10.6982V23.1224C133.047 24.3049 132.092 25.1705 130.788 25.1705C129.484 25.1705 128.602 24.3049 128.602 23.1224V10.6982Z" fill="white"/>
                        <path xmlns="http://www.w3.org/2000/svg" d="M139.448 8.9049V6.14963C139.448 4.96719 140.408 4.10156 141.706 4.10156C143.005 4.10156 143.892 4.96719 143.892 6.14963V8.9049H145.946C147.141 8.9049 147.999 9.70262 147.999 10.8568C147.999 12.0109 147.141 12.7804 145.946 12.7804H143.892V23.1225C143.892 24.305 142.932 25.1706 141.634 25.1706C140.335 25.1706 139.448 24.305 139.448 23.1225V12.7804H137.944C136.748 12.7804 135.891 11.9826 135.891 10.8285C135.891 9.67433 136.748 8.9049 137.944 8.9049H139.448Z" fill="white"/>
                        <path xmlns="http://www.w3.org/2000/svg" d="M39.4564 0.034361L33.8689 2.39589L23.7983 12.8916L28.9979 15.453L11.6406 28.3353L18.2963 25.5552C19.348 25.1147 20.5674 25.2647 21.468 25.9456L23.6241 27.5731C23.9824 27.8448 24.5148 27.7043 24.6824 27.2951L26.4639 22.825C26.7399 22.1316 27.279 21.5662 27.9758 21.2351L32.758 18.9641C33.2773 18.7173 33.6717 18.2863 33.859 17.7646L39.979 0.4873C40.0677 0.237403 39.8606 0 39.6141 0C39.5615 0 39.5089 0.0093712 39.4564 0.034361Z" fill="url(#paint0_linear_693_8244)"/>
                        <path xmlns="http://www.w3.org/2000/svg" d="M7.12844 13.7039C6.55655 13.9444 6.11941 14.4067 5.92878 14.9752L0.0192097 32.518C-0.0826794 32.821 0.239422 33.0959 0.545089 32.9679L4.00932 31.5216L14.8589 20.2137L9.65924 17.6523L25.3797 5.98828L7.12844 13.7039Z" fill="url(#paint1_linear_693_8244)"/>   
                        <defs>
                            <linearGradient
                                id="paint0_linear_693_8244"
                                x1={42.0463}
                                y1={2.74887}
                                x2={13.626}
                                y2={32.6524}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#6BE900" />
                                <stop offset={0.2} stopColor="#66E501" />
                                <stop offset={0.42} stopColor="#58DC07" />
                                <stop offset={0.66} stopColor="#41CE11" />
                                <stop offset={0.9} stopColor="#21B91E" />
                                <stop offset={1} stopColor="#13B024" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_693_8244"
                                x1={34.2047}
                                y1={-4.70421}
                                x2={5.78451}
                                y2={25.2025}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#6BE900" />
                                <stop offset={0.2} stopColor="#66E501" />
                                <stop offset={0.42} stopColor="#58DC07" />
                                <stop offset={0.66} stopColor="#41CE11" />
                                <stop offset={0.9} stopColor="#21B91E" />
                                <stop offset={1} stopColor="#13B024" />
                            </linearGradient>
                        </defs>
                    </svg>
                </SvgIcon>
               
            </Box>
        </>
    )
}

export default Logo