# reactify-vue

transforms a vue component in a react one

TODO: to be updated after latest modifications

## usage example

* export a vue component as a react builder:

`ReactPayment.js`
```
import Vue from 'vue'
import PaymentApp from './PaymentApp.vue'
import reactify from 'reactify-vue'

export default reactify(Vue, PaymentApp)
```

* Import the react builder and use it as a react component

`ConsumerComponent.js`

```
import React from 'react'
import paymentBuilder from 'payment'
import 'payment/lib/payment.css'
const ReactPayment = paymentBuilder(React)

[...]

  render () {
    return (
      <Layout>
        <div>TEST</div>
        <ReactPayment prop1="value prop 1" $trigger={this.handleEvt}></ReactPayment>
      </Layout>
    )

[...]

```

## TODO

* compute a unique hash for multiple reactified components and use it as element id
* tests