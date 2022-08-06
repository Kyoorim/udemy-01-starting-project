//css모듈을 사용하면 좋은점: 기존의 className을 그대로 사용하되 거기서 고유한 이름으로 래핑을 한번 더해줌!
// ex. Button_button__21gkF
// 컴포넌트 안에서만 한정해서 사용할 수 있게 해줌
import styles from "./Button.module.css";

// import styled from "styled-components";
// // import './Button.css';

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
