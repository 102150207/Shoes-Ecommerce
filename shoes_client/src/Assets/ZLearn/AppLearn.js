import React, { useState, useEffect } from 'react';
import hardCodeDatas from './constants';
import ValuePage1 from './../../Core/Constants/FecthApi1';
import ValuePage2 from './../../Core/Constants/FecthApi2';
import ValuePage3 from './../../Core/Constants/FecthApi3';
import ValuePage4 from './../../Core/Constants/FecthApi4';
import ValuePage5 from './../../Core/Constants/FecthApi5';
import ColorBox from './ColorBox';
import TodoList from './TodoList';
import UserList from './UserList';
import ListPagination from './ListPagination';
import ShowImageFacebook from './ShowImageFacebook';
import './AppLearn.css'
const AppLearn = () => {

     const [todoList, setTodoList] = useState([
          {id : 1,value: "hello"},
          {id : 2,value: "hello2"},
          {id : 3,value: "hello3"},
          {id : 4,value: "hello4"}
     ]);
     const [value, setValue] = useState("");
     const [userList, setUserList] = useState([]);
     const [fullName, setfullName] = useState('');
     const [images, setImages]  = useState([
          'https://hinhanhdep.vn/wp-content/uploads/2019/11/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-b%C3%ACnh-minh-s%E1%BB%9Bm-mai-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-47.jpg',
          'https://taybacsensetravel.com/nview/at_diem-danh-nhung-diem-san-anh-dep-tim-lim-mua-lua-chin_c7ed1097335b91ca8cc67122805c1de7.jpg',
          'https://taybacsensetravel.com/nview/at_diem-danh-nhung-diem-san-anh-dep-tim-lim-mua-lua-chin_cd704b0ebc90514d52bd436978fd26d5.jpg',
          'https://taybacsensetravel.com/nview/at_diem-danh-nhung-diem-san-anh-dep-tim-lim-mua-lua-chin_db5d8cde5c181c521cffcbcb181b19e1.jpg',
          'https://taybacsensetravel.com/nview/at_diem-danh-nhung-diem-san-anh-dep-tim-lim-mua-lua-chin_b8a06ebaaf89948d522063369238722a.jpg',
          'http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-1_044126531.jpg',
          'http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-6_044127357.jpg',
          'http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-9_044127685.jpg',
          'http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-20_044128699.jpg',
          'http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-26_044129417.jpg'
     ])

     const [datas, setDatas] = useState([]);

     const [totalRow, setTotalRow] = useState(0);
     const [pages, setPages] = useState({
          page : 1,
          limit : 5,
          totalRow : 6
     });

     const [valueSearch, setValueSearch] = useState('');

     useEffect(()=>{
          const userListApi = hardCodeDatas;
          setUserList(userListApi.data)

          return () =>{

          }
     },[])

     useEffect(()=>{
          async function fecthApi () {
               const response1 = ValuePage1;
               const response2 = ValuePage2;
               const response3 = ValuePage3;
               const response4 = ValuePage4;
               const response5 = ValuePage5;
               if(pages.page === 1 ){
                    setDatas(response1.response.data);
                    const {totalRow} = response1.response.paginnatin;
                    setTotalRow(totalRow);
               }
               if(pages.page === 2 ){
                    setDatas(response2.response.data);
               }
               if(pages.page === 3 ){
                    setDatas(response3.response.data);
               }
               if(pages.page === 4 ){
                    setDatas(response4.response.data);
               }
               if(pages.page === 5 ){
                    setDatas(response5.response.data);
               }
          }
          fecthApi()
     },[pages])

     const handleOnChangeValue = (e) => {
          const value = e.target.value;

          setValue(value);
     }

     const handleOnSubmitAddValue = (e) =>{
          e.preventDefault();

          const newTodoList = [...todoList];
          const itemValue = {
               id : 5,
               value
          };
          newTodoList.push(itemValue);

          setTodoList(newTodoList);
          setValue('');
     }

     const setOnChangeColor = (item)=> {
          const indexTodo = todoList.findIndex(x => x.id === item.id)

          if(indexTodo < 0) return;
          
          const newTodoList = [...todoList];
          newTodoList.splice(indexTodo, 1)
          setTodoList(newTodoList)
     }

     const handleOnChangeUser = (e) => {
          const fullNameValue = e.target.value;
          setfullName(fullNameValue);
     }

     const handleOnSubmitAddUser = (e) =>{
          e.preventDefault();

          const lenUsers = parseInt(userList.length) + 1 ;
          const user = {
               id :  lenUsers,
               fullName : fullName,
               address : {
                   location : 388,
                   value : "Xa Binh Tu huyen Thang Binh tinh Quang Nam"
               },
               sex : 'Male'
          };

          const newUserList = [...userList];
          newUserList.push(user)

          setUserList(newUserList);
          setfullName('');
     }
     
     const handleOnchangePage = (page) => {
          setPages({...pages, page, totalRow})
     }

     const handleRemoveItem = (id) => {
          const indexItem = datas.findIndex(x => x.id ===id)
          const len = datas.length;

          setDatas([...datas.slice(0, indexItem), ...datas.slice(indexItem + 1, len)])
     }

     const handleOnChangeSearch = (e) => {
          const response1 = ValuePage1;
          const value = e.target.value;
          setValueSearch(value);

          if(value ===''){
               setDatas(response1.response.data);
               setPages(
                    { 
                         page : 1,
                         limit : 5,
                         totalRow : 6
                    }
               )
          } else {
               const response2 = ValuePage2;
               const response3 = ValuePage3;
               const response4 = ValuePage4;
               const response5 = ValuePage5;
               const dataSearchs = [
                    ...response1.response.data, 
                    ...response2.response.data,
                    ...response3.response.data,
                    ...response4.response.data,
                    ...response5.response.data
               ];
               
               const realData = dataSearchs.filter(x=> x.value[0] === value[0]);
               setDatas(realData);
          }
     }

     return (
          <div className = 'App'>
               {/* <TodoList 
                    todos = {todoList} 
                    onTodoClick = {setOnChangeColor}
               />
                <form className = "form_add_value" onSubmit = {handleOnSubmitAddValue}>
                    <input type = 'text' value = {value} onChange = {handleOnChangeValue} />
               </form>
               <ColorBox/>

               <form className = "form_add_use" onSubmit = {handleOnSubmitAddUser}>
                    <input type = 'text' value = {fullName} onChange = {handleOnChangeUser} />
               </form>

               <UserList uses = {userList}/> */}

               {/* <ShowImageFacebook  images = {images}/> */}

               {/* <input onChange = {handleOnChangeSearch} value = {valueSearch}></input>
               <ListPagination 
                    data = {datas} 
                    pagination = {pages}
                    handleRemove = {handleRemoveItem}
                    onChangePagination ={handleOnchangePage}
               /> */}

               <div className = "container__grid">
                    <div className = "item__1"></div>
                    <div className = "item__2"></div>
                    <div className = "item__3"></div>
                    <div className = "item__4"></div>
                    <div className = "item__5"></div>
                    <div className = "item__6"></div>
               </div>
          </div>
     )
}
export default AppLearn;
