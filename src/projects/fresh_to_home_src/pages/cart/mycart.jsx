import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const MyCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'iPhone 13 Pro',
      price: 999.99,
      quantity: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5tasprhUi8TwsWGgyVpwwzUWp53HDNVSbvzF6xVwiCz6xfE5C2jXDEjCdNhIjx-_wdY&usqp=CAU',
      seller: 'Apple Store',
      delivery: '2-3 days'
    },
    {
      id: 2, 
      name: 'Samsung Galaxy S21',
      price: 799.99,
      quantity: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnizFsQNua1DAw1oFwUALEcAAIZw_mSQhYw&s',
      seller: 'Samsung Official',
      delivery: '3-4 days'
    },
    {
        id: 3, 
        name: 'Samsung Galaxy S21',
        price: 799.99,
        quantity: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnizFsQNua1DAw1oFwUALEcAAIZw_mSQhYw&s',
        seller: 'Samsung Official',
        delivery: '3-4 days'
      },
      {
        id: 4, 
        name: 'Samsung Galaxy S21',
        price: 799.99,
        quantity: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnizFsQNua1DAw1oFwUALEcAAIZw_mSQhYw&s',
        seller: 'Samsung Official',
        delivery: '3-4 days'
      }
  ])

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => {
      if(item.id === id) {
        return {...item, quantity: Math.max(1, item.quantity + change)}
      }
      return item
    }))
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Cart ({cartItems.length})</Text>
      </View>

      <ScrollView style={styles.itemList}>
        {cartItems.map(item => (
          <View key={item.id} style={styles.cartItem}>
            <Image 
              style={styles.itemImage}
              source={{uri: item.image}}
            
            />
            
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.seller}>Seller: {item.seller}</Text>
              <Text style={styles.price}>${item.price}</Text>
              
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => updateQuantity(item.id, -1)}>
                  <Icon name="remove-circle-outline" size={24} color="#2874f0" />
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
                  <Icon name="add-circle-outline" size={24} color="#2874f0" />
                </TouchableOpacity>
              </View>

              <Text style={styles.delivery}>Delivery in {item.delivery}</Text>
            </View>

            <TouchableOpacity 
              style={styles.removeBtn}
              onPress={() => removeItem(item.id)}
            >
              <Icon name="delete-outline" size={24} color="#ff6161" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
 
      <View style={styles.footer}>
        <View style={styles.priceDetails}>
          <Text style={styles.totalText}>Total Amount:</Text>
          <Text style={styles.totalAmount}>${getTotal().toFixed(2)}</Text>
        </View>
        
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>PLACE ORDER</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f3f6'
  },
  header: {
    padding: 15,
    backgroundColor: '#2874f0'
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemList: {
    flex: 1
  },
  cartItem: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 8,
    borderRadius: 8,
    elevation: 2
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500'
  },
  seller: {
    color: '#666',
    fontSize: 14,
    marginTop: 4
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
    marginTop: 4
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8
  },
  quantity: {
    paddingHorizontal: 15,
    fontSize: 16
  },
  delivery: {
    color: '#388e3c',
    marginTop: 8,
    fontSize: 14
  },
  removeBtn: {
    padding: 5
  },
  footer: {
    backgroundColor: '#fff',
    padding: 15,
    elevation: 10
  },
  priceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  totalText: {
    fontSize: 16,
    fontWeight: '500'
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  checkoutBtn: {
    backgroundColor: '#fb641b',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center'
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
