import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import PostCard from "../../components/postCard";
import ListaDePosts from "./index.jsx";
configure({ adapter: new Adapter() });

describe("<PostCard/>", () => {
  it("nao deve carregar nenhum postCard se não tiver conteudo no banco");
  const wrapper = shallow(<ListaDePosts />);
  expect(wrapper.find(PostCard)).toHaveLength(0);
});
