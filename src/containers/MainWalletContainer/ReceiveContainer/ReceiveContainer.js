import React, { PureComponent } from 'react'; 
import { compose } from 'recompose';
import { Row, Col, Input, Icon, Button, Layout } from 'antd';
import QRCode from 'qrcode.react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { connectWallet } from 'core';

const { Content} = Layout;

class ReceiveContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bitgBalance: 333.121,
      copied: false
    }
  }

  render () {
    const { wallet } = this.props

    return (
      <div className="block">
        <Layout>
          <Layout>
            <Content className="main">
              <Row className="receive_area">
                <Col className="receive_label center">
                  <span>Available Balance</span>
                </Col>
                <Col className="receive_balance_label center">
                  <span>{this.state.bitgBalance} BITG</span>
                </Col>
                <Col className="receive_qrcode center">
                  <QRCode value={wallet.address ? wallet.address : ''}/>
                </Col>
                <Col className="receive_address_area" sm={{ span: 20, offset: 2 }}>
                  <Row className="clipboard_cpy_area">
                    <Col className="receive_address" sm={{ span: 18 }} xs={{ span: 16}}>
                      <Input value={wallet.address ? wallet.address : ''} readOnly/>
                    </Col>
                    <Col sm={{ span: 6 }} xs={{ span: 8}}>
                      <CopyToClipboard text={wallet.address ? wallet.address : ''} onCopy={() => this.setState({copied: true})}>
                        <Button className="address_copy_btn">Copy <Icon type="copy"/></Button>
                      </CopyToClipboard>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }  
}

const mapStateToProps = ({wallet}) => ({
  wallet: wallet
});

export default compose(
  connectWallet(mapStateToProps, null),
)(ReceiveContainer);