import { CreepySpider } from './Spider.styles';

const Spider = () => (
  <CreepySpider>
    <div className="spiderweb"></div>
    <div className="body">
      <div className="eye left"></div>
      <div className="eye right"></div>
    </div>
    <div className="legs left">
      <div className="leg"></div>
      <div className="leg"></div>
      <div className="leg"></div>
    </div>
    <div className="legs right">
      <div className="leg"></div>
      <div className="leg"></div>
      <div className="leg"></div>
    </div>
  </CreepySpider>
);

export default Spider;
