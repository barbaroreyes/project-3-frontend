import React from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components"
import {menuData} from "../data/MenuData"

export default function Header (){
	return (
		
		<Wrapper>

			
				<img src="https://bn1304files.storage.live.com/y4mpKzW6-2QNM2uI6ld0jlkdSsFgdtuiJZt9VayonGVsHIfgjQdE16f9-unyuwJ5nDVX5b1lqEI7X8zkdSoBDNcOCl8XolsCzKaHXGp1YLBqdTDlkaY5M7CX4pVbGuVUUSQiX8gcv6PBi3_hEMqw1tSYuELEAIour4eVbCYmG_wJMjziw9UF0gm4bzg88TOJnfU?width=250&height=250&cropmode=none" alt='picture' />
		

			<MenuWrapper>
			{menuData.map((item , index)=> (
				<Link to={item.link} key={index}>
				{item.title}
				</Link>
			))} 
			</MenuWrapper>
			
					
		</Wrapper>
		
	)
}




const Wrapper = styled.div`
	background: linear-gradient(108deg, #FFBD08 25%, #FF5a5a 70%);
	
	display: flex;
	grid-template-columns: 44px auto;
	width: 100%;
	justify-content: space-around;
	padding: 0 30px;
	align-items: center;
`


const MenuWrapper = styled.div`
	display: flex;
	grid-template-columns: repeat(6, auto);
	gap: 50px;
`
//MenuItem is missing
// const MenuItem = styled.div`
// 	color: rgba(255, 255, 255, 0.7);
// 	display: flex;
// 	grid-template-columns: 24px auto;
// 	gap: 10px;
// 	align-items: center;
// 	padding: 10px;
// 	border-radius: 10px;
// 	transition: 0.5s ease-out;

// 	:hover {
// 	background: rgba(255, 255, 255, 0.1);
// 	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
// 	inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2)
// 	}

// `



