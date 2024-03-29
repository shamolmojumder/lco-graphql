import { buildSchema } from "graphql";

const schema=buildSchema(`
    type Course{
        id:ID
        courseName:String
        category:String
        price:Int
        language:String
        email:String
        stack:Stack
        teachingAssists:[TeachingAssists]

    }

    type TeachingAssists{
        fristName:String
        lastName:String
        experience:Int
    }

    enum Stack{
        WEB
        MOBILE
        OTHER
    }


    type Query{
        getCourse(id:ID):Course
    }

    input CourseInput{
        id:ID
        courseName:String!
        price:Int!
        language:String
        email:String
        stack:Stack
        teachingAssists:[TeachingAssistsInput]!
    }

    input TeachingAssistsInput{
        fristName:String
        lastName:String
        experience:Int
    }

    type Mutation{
        createCourse(input:CourseInput):Course
    }
`)

export default schema;