// GRID 를 생성한다.
// 나이는 수정할 수 있도록 설정한다.
var grid = new tui.Grid( {
    el: document.getElementById('grid'),
    columns: [
        {
            header: '이름',
            name: 'name'
        },
        {
            header: '나이',
            name: 'value',
            editor: 'text'
        }
    ]
} );

// GRID 에 데이터를 입력한다.
var arrData = [
    {
        name: '홍길동',
        value: '20세'
    },
    {
        name: '이지연',
        value: '26세'
    }
];

grid.resetData( arrData );
