import Component from '../../essential/component.js';

const CONTENT = `
  <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
  <form>
    <select id="course-select">
      <option value="frontend">프론트엔드</option>
      <option value="backend">백엔드</option>
    </select>
    <select id="mission-select">
      <option value="baseball">숫자야구게임</option>
      <option value="racingcar">자동차경주</option>
      <option value="lotto">로또</option>
      <option value="shopping-cart">장바구니</option>
      <option value="payments">결제</option>
      <option value="subway">지하철노선도</option>
      <option value="performance">성능개선</option>
      <option value="deploy">배포</option>
    </select>
    <input type="button" id="show-team-matcher-button" value="확인" />
    
  </form>
`;

export default class Header extends Component {
  template() {
    return CONTENT;
  }

  setEvent() {
    this.addEvent('click', '#show-team-matcher-button', () => {
      let selectCourse = 'frontend';
      //this.$('#course-select').options[this.$('#course-select').selectIndex].value;
      let selectMisson = 'baseball';
      //this.$('#misson-select').options[this.$('#misson-select').selectIndex].value;

      //임시로 저장
      let sendInfo = {
        course: 'frontend',
        mission: 'baseball',
      };

      this.$props.selectCourseType(sendInfo);
    });
  }
}
