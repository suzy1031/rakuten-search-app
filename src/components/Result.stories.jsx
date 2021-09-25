import React from 'react';
import Result from './Result';

export default {
  component: Result,
  title: 'Result',
};

const result = {
  Items: [
    {
      Item: {
        mediumImageUrls: [
          {
            imageUrl:
              'https://thumbnail.image.rakuten.co.jp/@0_mall/keitai/cabinet/item/41_6/41-907_202109.jpg?_ex=128x128',
          },
        ],
        itemName:
          '【公式】iFace iphone13 ケース 13pro 13mini 13promax iphone12 12pro 12mini 12promax 11 SE 第2世代 se2 8 7 11pro 11promax XR XS X XSMax 6s 8Plus Reflection 透明 クリア 強化ガラス 【 リフレクション iPhone13 スマホケース アイフェイス iphone ケース 耐衝撃 】',
        itemPrice: 3520,
      },
    },
    {
      Item: {
        mediumImageUrls: [
          {
            imageUrl:
              'https://thumbnail.image.rakuten.co.jp/@0_mall/keitai/cabinet/item/41_6/41-907_1.jpg?_ex=128x128',
          },
        ],
        itemName:
          '【公式】iFace iphone13 ケース 13pro 13mini 13promax iphone12 12pro 12mini 12promax 11 SE 第2世代 se2 8 7 11pro 11promax XR XS X XSMax 6s 8Plus Reflection 透明 クリア 強化ガラス 【 リフレクション iPhone13 スマホケース アイフェイス iphone ケース 耐衝撃 】',
        itemPrice: 3520,
      },
    },
    {
      Item: {
        mediumImageUrls: [
          {
            imageUrl:
              'https://thumbnail.image.rakuten.co.jp/@0_mall/keitai/cabinet/item/41_6/41-907_2.jpg?_ex=128x128',
          },
        ],
        itemName:
          '【公式】iFace iphone13 ケース 13pro 13mini 13promax iphone12 12pro 12mini 12promax 11 SE 第2世代 se2 8 7 11pro 11promax XR XS X XSMax 6s 8Plus Reflection 透明 クリア 強化ガラス 【 リフレクション iPhone13 スマホケース アイフェイス iphone ケース 耐衝撃 】',
        itemPrice: 3520,
      },
    },
  ],
};

export const Template = () => <Result result={result} />;
