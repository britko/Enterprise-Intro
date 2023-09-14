//const dataSource = {
//    withCredentials: false,
//    initialRequest: true,
//    api: {
//        readData: { url: '/board/data', method: 'GET' },
//        CreateData: { url: '/board/data', method: 'POST' },
//        updateData: { url: '/board/data', method: 'PUT' },
//        deleteData: { url: '/board/data', method: 'DELETE' }
//    }
//};

const grid = new tui.Grid({
    el: document.getElementById('grid'),
    data: {
        api: {
            readData: { url: '/board/data', method: 'GET' },
            createData: { url: '/board/data', method: 'POST' },
//            updateData: { url: '/board/data', method: 'PUT' },
//            deleteData: { url: '/board/data', method: 'DELETE' }
        }
    },
    scrollX: false,
    scrollY: false,
    minBodyHeight: 30,
//    rowHeaders: ['rowNum'],
    pageOptions: {
        perPage: 5
    },
    columns: [
        {
            header: '순번',
            name: 'id'
        },
        {
            header: '제목',
            name: 'title',
            editor: 'text'
        },
        {
            header: '내용',
            name: 'content',
            editor: 'text'
        },
        {
            header: '작성자',
            name: 'writer'
        },
        {
            header: '조회수',
            name: 'viewCnt'
        }
    ]
}); // grid


//$(document).ready(async () => {
//    // 2. HTML이 수행된 뒤 함수를 호출한다.
//    await gridLoad();
//});
//
//
///**
// * [API] TOAST 데이터 조회, 수정, 삭제를 위한 API 통신
// *
// * @reference : https://github.com/nhn/tui.grid/blob/master/packages/toast-ui.grid/docs/ko/data-source.md
// * @reference  Document : https://github.com/nhn/tui.grid/blob/master/packages/toast-ui.grid/docs/ko/data-source.md
// * @reference  API: https://nhn.github.io/tui.grid/latest/Grid#readData
// * @return {{api: {readData: {method: string, url: string}}}}
// */
//const toastUiDataSource = () => {
//    return {
//        initialRequest: true,                   // [Essential] 초기 데이터 조회를 위한 readData API 요청 여부
//        api: {
//            hideLoadingBar: false,              // [Options] 로딩바 숨김 여부
//            /*
//             * [API] 사용자 리스트를 조회합니다.
//             * @reference: [Request] Query String / [Response] JSONObject
//             */
//            readData: {
//                url: '/board/data',
//                method: 'GET',
////                initParams: {
//                    // [Option] Query String으로 보낼 데이터
//                    // perPage: 100,                // [Options] 페이지에 보여줄 개수
//                    // page: 0,                     // [Options] 시작 페이지
//                    // sortColumn: "userSq",        // [Options] Sorting 여부
//                    // sortAscending: true          // [Options] 오름 차순 여부
////                },
//            },
//            /*
//             * [API] 사용자를 추가합니다.
//             * @reference: [Request] Grid Row(JSON) / [Response] JSONObject
//             */
//            createData: {
//                url: '/board/data',
//                method: 'POST',
//                contentType: 'application/json',    // Request 데이터 전송방식(JSON)
//            },
//            /*
//             * [API] 사용자를 수정합니다.
//             * @reference: [Request] Grid Row(JSON) / [Response] JSONObject
//             */
////            updateData: {
////                url: '/api/v1/admin/user',
////                method: 'PUT',
////                contentType: 'application/json',    // Request 데이터 전송방식(JSON)
////            },
//        },
//    }
//};
//
//
///**
// *
// * @return void
// */
//const gridLoad = () => {
//    // 3. 그리드 생성
//    const grid = new tui.Grid({
//        // ================================== 공통 옵션 적용 ==============================
//        el: document.getElementById('grid'),    // [필수] Container element
//        data: toastUiDataSource(),              // [선택] 그리드 데이터 조회
//        columns: [
//            {
//                header: '순번',
//                name: 'id'
//            },
//            {
//                header: '제목',
//                name: 'title',
//                editor: 'text'
//            },
//            {
//                header: '내용',
//                name: 'content',
//                editor: 'text'
//            },
//            {
//                header: '작성자',
//                name: 'writer'
//            },
//            {
//                header: '조회수',
//                name: 'viewCnt'
//            }
//        ]
//    });
//
//    /**
//     * [Event] 성공 / 실패와의 관계 없이 '응답'을 받은 경우 반환되는 값
//     */
//    grid.on('response', (ev) => responseList(ev));
//
//    const appendBtn = document.getElementById('appendBtn');         // 그리드 추가 버튼
//    const saveBtn = document.getElementById('saveBtn');             // 그리드 추가/저장 버튼
//    const registerBtn = document.getElementById('registerBtn');     // 그리드 등록 버튼
//
//    /**
//     * '추가' 버튼 수행 이벤트 등록
//     */
//    appendBtn.addEventListener('click', () => {
//        grid.prependRow({
//                "id": "",
//                "title": "",
//                "content": "",
//                "writer": "",
//                "viewCnt": "",
//            },
//            {focus: true}
//        );
//        grid.setPerPage(10);    // 페이지당 10개씩 보여지고 페이지 새로고침을 수행합니다.
//    });
//
//    /**
//     * '저장' 버튼 수행 이벤트 등록 => 수정
//     */
//    saveBtn.addEventListener('click', (e) => {
//        transactionValidateMsg(grid, 'modify');
//    });
//
//    /**
//     * '등록' 버튼 수행 이벤트 등록 => 등록
//     * '추가' 버튼 이후에 저장하는 데이터
//     */
//    registerBtn.addEventListener('click', () => {
//        // 유효성 검증을 데이터를 반환 받습니다.
//        transactionValidateMsg(grid, 'register')
//    });
//};
//        /**
// * [함수] dataSource 선언한 API 함수 호출이 발생 할 경우 반환값을 리턴해주는 함수 입니다.
// *
// * @param ev
// * @return void
// */
//const responseList = (ev) => {
//    const {response} = ev.xhr;
//    const responseObj = JSON.parse(response);
//
//    const {result, data: {contents}} = responseObj;
//
//    if (result) {
//        console.log(typeof data);
//        console.log(contents);
//        // select
//
//        if (contents.length === undefined) {
//            if (contents.type === "insert") {
//                alert("사용자 등록이 완료되었습니다.");
//            }
//            if (contents.type === "update") {
//                alert("사용자 수정이 완료되었습니다.")
//            }
//        }
//    } else alert("해당 처리가 되지 않았습니다. 관리자에게 문의해주세요.")
//
//
//    console.log('result : ', responseObj.result, " data: ", responseObj.data);
//}


