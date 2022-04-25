import Tr from "./Tr";
import photo1 from "../../../public/images/logos/logo-xd.svg"
import photo2 from "../../../public/images/logos/logo-atlassian.svg"
import photo3 from "../../../public/images/logos/logo-slack.svg"
import photo4 from "../../../public/images/logos/logo-spotify.svg"
import photo5 from "../../../public/images/logos/logo-jira.svg"
import photo6 from "../../../public/images/logos/logo-invision.svg"
import member1 from "../../../public/images/avatars/avatar1.png"
import member2 from "../../../public/images/avatars/avatar2.png"
import member3 from "../../../public/images/avatars/avatar3.png"
import member4 from "../../../public/images/avatars/avatar4.png"
import member5 from "../../../public/images/avatars/avatar5.png"
import member6 from "../../../public/images/avatars/avatar6.png"
import member7 from "../../../public/images/avatars/avatar7.png"
import member8 from "../../../public/images/avatars/avatar8.png"
import member9 from "../../../public/images/avatars/avatar9.png"
import member10 from "../../../public/images/avatars/avatar10.png"

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <span className="gray">COMPANIES</span>
          </th>
          <th>
            <span className="gray">MEMBERS</span>
          </th>
          <th>
            <span className="gray">BUDGET</span>
          </th>
          <th>
            <span className="gray">COMPLETION</span>
          </th>
        </tr>
      </thead>
      <tbody className="projects-table">
        <Tr
          name="Chakra Vision UI Version"
          pic={photo1}
          members={
              [
                {id:1, user: "Ahmed", img:member1},
                {id:2, user: "Mahmoud", img:member2},
                {id:3, user: "Hady", img:member8},
                {id:4, user: "Hossam", img:member9},
              ]
          }
          budget="14,000"
          complete= {60}
        ></Tr>
        <Tr
          name="Add Progress Track"
          pic={photo2}
          members={
            [
              {id:5, user: "Ahmed", img:member3},
              {id:6, user: "Mahmoud", img:member4}
            ]
          }
          budget="3,000"
          complete= {20}

        ></Tr>

        <Tr
          name="Fix Platform Errors"
          pic={photo3}
          members={
            [
              {id:7, user: "Ahmed", img:member5},
              {id:8, user: "Mahmoud", img:member6},
              {id:9, user: "Mahmoud", img:member10},
            ]
          }
          budget="1,000"
          complete= {100}

        ></Tr>

        <Tr
          name="Launch our Mobile App"
          pic={photo4}
          members={
            [
              {id:10, user: "Ahmed", img:member7},
            ]
          }
          budget="20,500"
          complete= {100}

        ></Tr>

        <Tr
          name="Add the New Pricing Page"
          pic={photo5}
          members={
            [
              {id:11, user: "Ahmed", img:member9},
              {id:12, user: "Mahmoud", img:member10},
            ]
          }
          budget="$500"
          complete= {25}

        ></Tr>

        <Tr
          name="Redesign New Online Shop"
          pic={photo6}
          members={
              [
                {id:13, user: "Ahmed", img:member2},
                {id:14, user: "Mahmoud", img:member5},
                {id:15, user: "Ahmed", img:member3},
                {id:16, user: "Mahmoud", img:member6},
              ]
          }
          budget="2,000"
          complete= {45}
        ></Tr>
      </tbody>
    </table>
  );
};

export default Table;
