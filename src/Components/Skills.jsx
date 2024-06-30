import { Card, Col, Row } from 'antd';
export default function Skills() {
    return (
        <>
            <div className="text-center bg-body-tertiary" id='skills'>
                <h1 className="h1 fw-bold">Skills I <span className="text-primary">possess</span></h1>
                <p className="text-center p-2">Hello! I'm Shums Nahta, an entry-level software engineer passionate about building innovative solutions. With a strong foundation in Core Java and expertise in modern technologies like JavaScript, React.js, and Bootstrap, I bring creativity and efficiency to my projects. Proficient in managing APIs with Swagger and collaborating seamlessly with teams using Trello and Bitbucket, I am adept at delivering high-quality software solutions. My experience with databases like MySQL and version control systems like GitHub ensures the reliability and scalability of my work. With a keen eye for detail and a commitment to continuous learning, I'm eager to contribute to exciting projects and further enhance my skills in the dynamic field of software engineering.</p>

                <Row gutter={[16, 16]} justify="center">
                    <Col xs={24} sm={12} lg={8}>
                        <Card title="Core Java" bordered={false}>
                            With a solid understanding of Core Java, I've achieved a two-star rating on Codechef and tackled over 100 questions on LeetCode. I possess practical expertise in Multithreading and the Collection framework, allowing me to develop efficient and scalable software solutions.
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} lg={8}>
                        <Card title="React.js" bordered={false}>
                            Proficient in React, I excel in building reusable UI components and managing data flow with state and props. Skilled in event handling, conditional rendering, and efficient list rendering. Familiar with React Hooks and the Context API for state management.
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} lg={8}>
                        <Card title="JavaScript" bordered={false}>
                            I possess advanced knowledge of topics such as promises, async/await functions, and asynchronous JavaScript. Skilled in DOM manipulation, event handling, and browser compatibility. Experienced in utilizing modern ES6 features, modules, and higher-order functions.
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} lg={8}>
                        <Card title="SQL" bordered={false}>
                            Skilled in Oracle Database administration using SQL Plus 10g for effective management. Proficient in DDL, DML, DCL, DQL, and TCL operations. Expertise in SQL functionalities such as Grouping, Functions, sub-queries, and Joins.
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} lg={8}>
                        <Card title="Swagger API" bordered={false}>
                            I've effectively documented and tested APIs for streamlined development processes. With expertise in Swagger, I've ensured clear communication and efficient workflows, resulting in the delivery of high-quality software solutions.
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} lg={8}>
                        <Card title="Bootstrap/Ant Design" bordered={false}>
                            Skilled in crafting webpages with Bootstrap and Ant Design, ensuring sleek and responsive designs. Proficient in leveraging Bootstrap's CSS framework and Ant Design's UI components for efficient development. Experienced in creating user-friendly interfaces.
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}
