//학생관리 프로그램
/*
학생관리 프로그램은 2가지 측면으로 프로그래밍이 필요함
1. 학생의 값만 받아서 입력받는 부분인데 이 부분에서 모든 학생들의 공통점은
학생이라는 점이고 , 또 다른 공통점으로 묶는다면 학교정도로 나뉠것 같음
학교별로 학생들을 관리해야하는 점
2. 그럼 내가 입력받아야 하는 값에는  학생의 이름, 학교명, 학년, 몇반인지, 학생의 성적을
받아서 학점은 몇점이고 , 내신 등급이 몇등급인지 등등이 확인이 가능했으면 좋겠음

3. 학교도 관리를 해야하는데 학교별로 몇학년 몇반까지 있는지
 이 학교 어떠한 반에는 어떤 학생이 있는지도 관리가 되었으면 좋겠음


 일단 내가 받아와야 하는 정보들이 여러가지 있음
 아이디 , 학생이름, 전화번호, 학년, 성별 , 학교  , 나이
 수강료 : 과목 * 수강료
 수강과목 :  과목당 얼마인지 고민
 담당 선생님
 수강 시작일시 : 
 


 저장된 값으로 성적관리, 클래스관리, 출결관리가 필요함

 == 일단 학교별로 다 나눠서 만들기에는 너무 복잡하니 일단 한 학교에서만 지정하고 짜보자
 
/ 학생명부 작성용 페이지가 필요함
/ 코딩부터 해보자면
 제일 상위 클래스로는  학생인지 / 선생님인지 구분이 필요함
 하위 클래스에는  학년이 몇학년인지가 필요함
 중학생을 기준으로 1~3학년 까지만 존재하는것으로 학년별로 클래스를 지정해서 작성하면 될것으로 
 판단됨
 
클래스는 최소 4개임
학생 - 1학년 , 2학년 , 3학년
받아야하는 정보는 다시 정리하면
맨 상위클래스인 학생 클래스에서는 ->  학생이름, 성별, 나이를 받고
그 하위클래스인 학년 클래스에서  하위요소로 몇반인지를 구분하면 되지 않을까?
일단 해보자 
*/

class Student {
    constructor(Sname, sex, age){
      this.Sname = Sname;
      this.sex = sex;
      this.age = age;  
      this.Grade ='';
    }
    whatGrade(){
        switch(this.age){
            case 11 : this.Grade = 'firstGrade'
            break; 
            case 12 : this.Grade = 'SecondGrade'
            break; 
            case 13 : this.Grade = 'ThirdGrade'
            break; 
        }
    }
}
class FirstGrade extends Student{
    constructor(Sname, sex, age){
        super(Sname, sex, age);
        this.className ='';
        var classnum = 0;
    }
    get whatClass(){
        if(classnum < 8){
            if(classnum > 4){
                classnum += 1
                return this.className = '하늘반'
            }else{
                classnum += 1
                return this.className = '물소반'
            }
        }
    };
}

let jisu = new FirstGrade('김지수','여성',12)

jisu.whatGrade();g0
console.log(jisu)
