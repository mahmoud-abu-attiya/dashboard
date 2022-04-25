import Atr from "./Atr"
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

const AuthorsTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <span className="gray">AUTHOR</span>
          </th>
          <th>
            <span className="gray">FUNCTION	</span>
          </th>
          <th>
            <span className="gray">STATUS</span>
          </th>
          <th>
            <span className="gray">EMPLOYED</span>
          </th>
        </tr>
      </thead>
      <tbody className="projects-table">
        <Atr
          autherImg={member4}
          autherName="Esthera Jackson"
          autherEmail="esthera@simmmple.com"
          Fone="Manager"
          Ftwo="Organization"
          status="online"
          date="23/04/18"
        ></Atr>
        <Atr
          autherImg={member2}
          autherName="Alexa Liras"
          autherEmail="alexa@simmmple.com"
          Fone="Programator"
          Ftwo="Developer"
          status="Offline"
          date="11/01/19"
        ></Atr>

        <Atr
          autherImg={member3}
          autherName="Laurent Michael"
          autherEmail="laurent@simmmple.com"
          Fone="Executive"
          Ftwo="Projects"
          status="online"
          date="19/09/17"

        ></Atr>

        <Atr
          autherImg={member9}
          autherName="Freduardo Hill"
          autherEmail="freduardo@simmmple.com"
          Fone="Programator"
          Ftwo="Developer"
          status="online"
          date="24/12/08"

        ></Atr>

        <Atr
          autherImg={member6}
          autherName="Daniel Thomas"
          autherEmail="daniel@simmmple.com"
          Fone="Manager"
          Ftwo="Executive"
          status="Offline"
          date="04/10/21"

        ></Atr>
        <Atr
          autherImg={member7}
          autherName="Mark Wilson"
          autherEmail="mark@simmmple.com"
          Fone="Programtor"
          Ftwo="Developer"
          status="Offline"
          date="14/09/20"

        ></Atr>
      </tbody>
    </table>
  )
}

export default AuthorsTable