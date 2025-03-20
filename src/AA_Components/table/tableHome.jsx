import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Table from './table'
import { H4 } from '../divider/heading'
import Pagination from "./pagination/pagination";
import Chart from './chart/chart';

const TableHome = () => {
  return (
    <>
      <H4 txt="Data By Chart"/>
      {/* <Table /> */}
      {/* <Pagination /> */}
      <Chart />
    </>
  )
}

export default TableHome

const styles = StyleSheet.create({})