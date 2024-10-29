import React from 'react'
import Breadcrumb from '../components/BreadCrumb'
import Container  from '../components/Container'
import VoucherInfo from '../components/VoucherInfo'
import SaleForm from '../components/SaleForm'

const SalePage = () => {
  return (
   <section>
    <Container>
    <Breadcrumb currentPageTitle={"Sale Module"} />
    <VoucherInfo />
    {/* <SaleForm /> */}
    </Container>
   </section>
  )
}

export default SalePage
