import styled from 'styled-components'

export const StyledPost = styled.div`
	margin: 0 auto; 
	display:flex;	
   flex-direction:column;
   max-width:750px;
	background-color: rgb(131,125,162);
	padding:20px;
	border: 1px solid black;
	
	& > div {
		display:flex;
		align-items:center;
		justify-content:start;


	   & > img.author-img {
			width: 80px;
         height: 80px;
         border-radius: 50px;
			margin:0px 10px 0px 0px;
	   }
		& > img.icon{
			max-width: 20px;
	      margin:0px 8px 0px 0px;
		}
		& > span{
			margin:0px 5px 0px 0px;
			font-size:20px;
			font-weight:bold;
		}
	}
	& > div.main-info {
		display:flex;
		flex-direction:column;
      margin: 0px 0px 10px 0px;

		& > p{
			justify-content:space-around;
			margin: 0px 170px 10px 0px;
			font-size:20px;
		}

	   & > img.main-img{
		   max-width:680px;
			border-radius:20px;
			margin:0px 0px 0px 70px;
		}

	}
	& > div.post-reactions {
		display:flex;
      justify-content:space-around;
		

		& > div{
			display:flex;
			align-items:center;
         

			& > img{
				max-width: 30px; 
				margin: 0px 10px 0px 0px;
			}
			& > img.icon-share{
				min-width:25px
			}
		}
	}
`