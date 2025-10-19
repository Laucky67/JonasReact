import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (   
      <img className="avatar" src="zhaopian.jpg" alt="" />
  );
}

function Intro() {
  return (
    <div>
      <h1></h1>
      <p>
        我是一个帅哥, 不是刻意标榜，而是从旁人的目光与自我的感知里，慢慢拼凑出对
        “帅” 的具体注解 ——
        它不只是皮囊的单薄定义，更藏在眉眼的神态、举止的分寸，还有待人时那份自在的温度里。
      </p>
    </div>
  );
}

function SkillList() {
  const skills = [
    {
      skill: "HTML+CSS",
      level: "advanced",
      color: "#2662EA",
    },
    {
      skill: "JavaScript",
      level: "advanced",
      color: "#EFD81D",
    },
    {
      skill: "Web Design",
      level: "advanced",
      color: "#C3DCAF",
    },
    {
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33",
    },
    {
      skill: "React",
      level: "advanced",
      color: "#60DAFB",
    },
    {
      skill: "NextJS",
      level: "beginner",
      color: "black",
    },
  ];

  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <SkillTap skillObj={skill} />
      ))}
    </div>
  );
}

function SkillTap({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "beginner" && "🍼"}
        {skillObj.level === "intermediate" && "👌"}
        {skillObj.level === "advanced" && "👍"}
      </span>
    </div>
  );
}

export default App;
