import { configure, shallow } from "enzyme";

import PostCard from "./index";
import UpVoteBotao from "../upVoteBotao/index.jsx";

const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");
configure({ adapter: new Adapter() });

describe("it shoul have a one upvotebutton", () => {
  it("nao deve carregar nenhum postCard se não tiver conteudo no banco");
  const wrapper = shallow(<PostCard />);
  expect(wrapper.find(UpVoteBotao)).toHaveLength(1);
});
