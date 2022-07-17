import Post from './components/Post/Post'
import { ANAKIN_IMAGE, RAY_IMAGE } from "./constants/constImg";

function App() {
	return (
		<Post
			author={{
				name: "Anakin Skywalker",
				photo: ANAKIN_IMAGE,
				nickname: "@dart_vader",
			}}
			content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
			image={RAY_IMAGE}
			date={"26 Feb."}
		/>
	)
};

export default App;
