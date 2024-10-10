import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Table from './table'
import { H4 } from '../divider/heading'

const TableHome = () => {
  return (
    <>
      <H4 txt="Table Example"/>
      <Table />
    </>
  )
}

export default TableHome

const styles = StyleSheet.create({})