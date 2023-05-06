<!DOCTYPE html>
<html>
<head>
    <title>Certificate</title>
</head>
<body>
    <div style="text-align: center;">
        <h2>Hall Clearence Certicate</h2>
    </div>
    <div style="text-align: center;">
        <span style=" font-weight:bold">Date: </span>{{ $date }}
    </div>
    <div style="margin-top:20px;">
        <div><span style=" font-weight:bold">Name: </span> {{$student->name}}</div>
        <div style="margin-top:5px;"><span style=" font-weight:bold">Roll: </span> {{$student->roll}}</div>
        <div style="margin-top:5px;"><span style=" font-weight:bold">Department: </span> {{$student->studentDetails->departmentDetail->name}}</div>
        <div style="margin-top:5px;"><span style=" font-weight:bold">Session: </span> {{$student->studentDetails->session}}</div>
    </div>
    <div style="margin-top:40px;">
        <div><span style=" font-weight:bold">Attached Date: </span> {{date_format(new DateTime($student->studentDetails->allocated_date),"d/m/Y")}}</div>
        <div style="margin-top:5px;"><span style="font-weight:bold">Total Charge (Tk.): </span>{{$student->studentDetails->charge}}</div>
        <div style="margin-top:5px;"><span style="font-weight:bold">Total Paid (Tk.): </span>{{$student->payments_sum_amount}}</div>
    </div>
    <div>

    <div  style="margin-top:60px;">
        <table style="width:100%">
            <tbody>
                <tr>
                    <td></td>
                    <td width="25%" style="border-top: 1px dotted black; text-align: center;">Provost's Signature</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>