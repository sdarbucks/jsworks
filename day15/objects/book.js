 //Book 객체 만들기 - 생성자 함수
 function Book(title, author, price){
    this.title = title;
    this.author = author;
    this.price = price;
}
//책 객체를 3권 생성
var web = new Book("HTML+CSS+자바스크립트", "고경희", 30000);
var python = new Book("점프 투 파이썬", "박응용", 20000);
var robot = new Book("천개의 파랑", "천선란", 14000)

//책을 배열에 저장
var booklist = [web, python, robot];

//python의 책 제목과 저자 출력
//document.write(booklist[0].title + ', ' + booklist[0].author + '<br>');

//책 제목만 전체 출력
document.write("<h1>책 제목으로 살펴보기</h1>");
for(var i = 0; i < booklist.length; i++){
    document.write('<p>' + booklist[i].title + '</p>');
}

/*document.write("책 이름 : " + web.title + '<br>');
document.write("작가 : " + web.author + '<br>');
document.write("가격 : " + web.price + '<br>');*/