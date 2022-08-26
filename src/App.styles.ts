import styled from "styled-components";
export const Background = styled.div`
	display: block;
	width: 804px;
	height: 596px;

	background: rgba(196, 196, 196, 0.83);
	margin: 0 auto;
`;
export const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	width: 100%;
	height: 100vh;

	background: transparent;
	top: -80px;
`;

export const Buttons = styled.div`
	position: absolute;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;

	width: 100%;
	bottom: 0;
	z-index: 2;
`;

export const ShowPosition = styled.div`
	position: absolute;

	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	text-align: center;
	bottom: -20px;
	z-index: 2;
	font-family: Roboto;
	font-size: 15px;
	font-weight: 700;
	line-height: 18px;
	letter-spacing: 0em;
	text-align: center;
	color: #ffffff;
`;
export const Header = styled.h3`
	position: relative;
	display: block;

	margin: 0 auto;
	font-family: Roboto;
	font-size: 18px;
	font-weight: 600;
	line-height: 21px;
	letter-spacing: 0em;
	text-align: center;
	color: #000000;
	padding-top: 19px;
`;
