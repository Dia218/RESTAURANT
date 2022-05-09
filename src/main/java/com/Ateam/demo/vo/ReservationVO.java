package com.Ateam.demo.vo;

import lombok.Data;

import java.sql.Time;
import java.util.Date;

@Data
public class ReservationVO {
    private int tableNo;
    private int tableSits;
    private Date reservationDate;
    private Time reservationTime;

    public int getTableNo() {
        return tableNo;
    }
    public void setTableNo(int tableNo) {
        this.tableNo = tableNo;
    }
    public int getTableSits() {
        return tableSits;
    }
    public void setTableSits(int tableSits) {
        this.tableSits = tableSits;
    }
}
