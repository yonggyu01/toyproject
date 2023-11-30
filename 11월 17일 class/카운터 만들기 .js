//0 이상의 값으로 초기화한뒤
// 하나씩 숫자를 증가할 수 있는
// 카운터 클래스 만들기
// 클래스로 고객이름이 추가될때마다 1씩 카운트가 올라가게 만들라는 소리로 이해됨
/*
let countNumber=0;

class Counter{
    customer;
    counting;
    constructor(customer){
        this.customer = customer;
        countNumber += 1;
        this.counting = countNumber;
    }

}
console.log(Counter)
class Kim extends Counter{}
let kim = new Kim('김수봉')
console.log(kim)
class Nam extends Counter{}
let nam = new Nam('남희석')
console.log(nam)
class Tom extends Counter{}
let tom = new Tom('톰크루즈')
console.log(tom)
class Elly extends Counter{
    constructor(customer, job){
        super(customer);
        this.job = job;
    }
}
let elly = new Elly('엘리','강사')
console.log(elly)

*/

/*
    정직원과 파트타임직원을 나타내는 클래스 생성자
    직원들 정보 :  이름, 부서이름, 한달 근무시간
    매달 직원정보를 이용해  한달 월급을 계산할 수 있음
    정직원은 시간당 10000원
    파트타이머는 시간당 8000원
    1. 직원관리프로그램 클래스 생성
    2.constructor에는  부서명, 근무시간, 정직원인지 파트타이머인지 여부
                     월급계산함수가 중복값이고
    직원들 이름별로  해당 클래스를 받아오면 될것 같음
    */

class Employee {
    #workTime;
    constructor(myName,teamName, workTime, jobType){
    this.myName = myName;
    this.teamName = teamName;
    this.#workTime = workTime;
    this.jobType = jobType;
    }
    get workTime(){
        return this.#workTime();
    }
    salary(){
        let money = 0;
        if(this.jobType == '정규직'){
            money = this.#workTime * 10000 
        console.log(`${this.myName} 님의 월급은 ${money} 입니다.`)
        }else{
            money = this.#workTime * 8000 
            console.log(`${this.myName} 님의 월급은 ${money} 입니다.`) 
        }
    }
}

class Eslly extends Employee{}
let eslly = new Eslly('에슬리','하드코딩반',700,'정규직')
eslly.salary();
console.log(eslly)
class Part extends Employee{
    constructor(myName,teamName, workTime, jobType, point){
        super(myName,teamName, workTime, jobType)
        this.point = point;
    }
    get pointRank(){
        console.log(`${this.myName} 100점이 되면 정직원으로 승급합니다. 현재 ${this.point} 입니다. `)
    }
}
let part = new Part('아르방','아르바이트반',300,'파트타이머',70)
console.log(part)
part.pointRank;
part.salary();


/// 문제 출제자가 만든 클래스를 참조하자면
// 클래스 employee에서는 필요한 값이 이름 부서명 한달 근무시간, 급여 이렇게 3가지고 구분했음
// 그리고 extends 클래스로 풀타임 클래스와  파트타임 클래스를 따로 지정하여
// 부모로부터 받아오는 인자중 급여부분만 풀타임은 10000, 파트는 8000원으로 받고
// 서브 클래스들은 파라매터를 3개만 받아옴 :  이유는
// 이유는 어차피 내가 생성하는 클래스는 파트타임과 풀타임 둘중하나이니 
// 내가 코딩한것과의 차이는 나는 정규직과 비정규직의 값을 파라매터로 받아왔고
// 그래서 클래스는 한번만 생성했다는점
// 문제 출제자는 파라매터로는 값을 3개만 받아오게 구성했다는점이 차이가 있음
// 이름, 팀이름, 월 근무시간만  받으면 나머지 급여 만원 팔천원 부분은  상위클래스인 employee에서 
// 내려받는 형식이며 작성한 수식을 내가 그대로  써본다면
// 아래와 같음

class EmployeeControl{
    #payrate
    constructor(eName, tmName, timeMonth, payrate){
        this.eName = eName;
        this.tmName = tmName;
        this.timeMonth = timeMonth;
        this.#payrate = payrate;
    }
    sum(){
      return    this.timeMonth * this.#payrate;
    }
}
class Fulltime extends EmployeeControl{
    static #payrate = 10000;
    constructor(eName, tmName, timeMonth){
        super(eName, tmName, timeMonth, Fulltime.#payrate);
    }
}
class Parttimer extends EmployeeControl{
    static #payrate = 8000;
    constructor(eName, tmName, timeMonth){
        super(eName, tmName, timeMonth, Parttimer.#payrate)
    }
}

let kim2 = new Fulltime('김수봉','s/w',30);
console.log(kim2)
console.log('풀타임 월급임 ',kim2.sum())

let bang = new Parttimer('알바꾼임','p/t',20);
console.log(bang)
console.log('알바생 월급임 ',bang.sum())


