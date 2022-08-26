import styled from "styled-components";
const Same = `
position: relative;
	z-index: 2;
	bottom: 15px;
width: 155px;
	height: 45px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	border: 1px solid grey;
	font-family: Roboto;
	font-size: 11px;
	font-weight: 600;
	line-height: 13px;
	letter-spacing: 0em;
	text-align: center;
	color: #ffffff;`;
export const StyledBtnLocal = styled.button`
	right: -40px;

	background: #9a2eef;
	${Same}
`;

export const StyledBtnRandom = styled.button`
	left: -40px;

	background: #2ec1ef;
	${Same}
`;
