"use client"


import { useEffect, useState } from "react";
import CategoryList from "./_components/CategoryList";
import Hero from "./_components/Hero";
import GlobalApi from "./_services/GlobalApi";
import BusinessList from "./_components/BusinessList";


export default function Home() {
  
  const [categoryList,setCategoryList]=useState([]);
  const [businessList,setBusinessList]=useState([]);

  useEffect(()=>{
    getCategoryList();
    getAllBusinessList();
    
  },[])

  /**
   * Used to get All Category List
   */
  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategoryList(resp.categories);
    })
  }

   /**
   * Used to get All Business List
   */
   const getAllBusinessList=()=>{
    GlobalApi.getAllBusinessList().then(resp=>{
      setBusinessList(resp.businessLists);
  })
}

  return (
   <div>
  <Hero/>
  <CategoryList categoryList={categoryList}/>
  <BusinessList businessList={businessList}
      title={'Popular Business'} />
   </div>
  );
}
