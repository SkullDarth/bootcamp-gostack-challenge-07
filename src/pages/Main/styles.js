import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Product = styled.View`
  background-color: #fff;
  width: 220px;
  height: 350px;
  margin-left: 15px;
  padding: 10px;
  border-radius: 4px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  padding-left: 10px;
  font-family: Roboto;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 21px;
  padding-left: 10px;
`;

export const CartButton = styled(RectButton)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 42px;
  background: #7159c1;
  color: #fff;
  border-radius: 4px;
  margin-top: auto;
`;

export const ItemCart = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 13px;
  background: rgba(0, 0, 0, 0.1);
`;

export const ItemCount = styled.Text`
  font-size: 14px;
  padding-left: 2px;
  color: #ffffff;
`;

export const CartButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  padding-right: 36px;
`;
