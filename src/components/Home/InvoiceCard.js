import React from 'react'
import { CommonButton } from '../common';
import { InvoiceCard, CardHeader } from './HomeElement'
import InvoiceTables from './invoiceTable';

const Invoice = () => {
    return (
        <div >
            <InvoiceCard>
                <CardHeader color='purple' buttonColor='orange'>
                    <span>Invoice</span>
                    <CommonButton>
                        View More
                    </CommonButton>
                </CardHeader>
            </InvoiceCard>
            <InvoiceTables />
        </div>
    )
}

export default Invoice