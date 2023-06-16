<!DOCTYPE html>
<html>
<head>
    <title>Certificate</title>
</head>
<body>
    <div>
        <table style="width:100%">
            <tbody>
                <tr>
                    <td width="15%">
                        <img width="70" src="{{ public_path('img/logo.png')}}" alt="logo">
                        <!-- <img width="100" src="{{ public_path('img/'.$logo)}}" alt="logo"> -->
                    </td>
                    <td width="62%" style="text-align: center; vertical-align: baseline;">
                        <div style="font-weight:bold; font-size:22px;">Pabna University of Science and Technology</div>
                        <div>Bangabandhu Sheikh Mujibur Rahman Hall</div>
                        <div>Rajapur, Pabna-6600</div>
                    </td>
                    <td width="23%" style="vertical-align: baseline;">
                        <div style="font-size:12px; text-align:right; margin-top:5px;">Email: bsmr.hall@pust.ac.bd</div>
                        <div style="font-size:12px; text-align:right">Phone: +8802588845707</div>
                        <div style="font-size:12px; text-align:right">Web: www.pust.ac.bd</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div style="border-style: double; margin-top:10px;"></div>
    <div style="margin-top:2px;">
        <table style="width:100%">
            <tbody>
                <tr>
                    <td width="50%">Reference No:</td>
                    <td width="50%" style="text-align: right;">Date: {{ $date }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div style="margin-top:5px;">
        <table style="width:100%">
            <tbody>
                <tr>
                    <td width="25%"></td>
                    <td width="50%" style="text-align: center;">
                        <div style="font-weight:bold; font-size:20px;">Sub: Hall Clearance</div>
                    </td>
                    <td width="25%">
                    @if('')         
                    @else
                    @endif
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="main-body" style="margin-top:20px;">
        <div style="text-align: center;">
            <span style="font-weight:bold; border-bottom: 1px solid black; font-size:18px;">To Whom It May Concern</span>
        </div>
        <div style="margin-top:20px; font-size:18px; text-align: justify; text-justify: inter-word;">
            This is to certify that Mr. <span style="font-weight:bold;">{{$student->name}}</span>,
            Roll: <span style="font-weight:bold;">{{$student->roll}}</span>, 
            Session: <span>{{$student->studentDetails->session}}</span>,
            Department: <span>{{$student->studentDetails->departmentDetail->name}}</span>, 
            Phone: <span>{{$student->phone}}</span>, 
            @if($student->studentDetails->allocated_date)         
                Hall Attached date: <span>{{date_format(new DateTime($student->studentDetails->allocated_date),"d/m/Y")}}</span> 
                has total <span style="font-weight:bold;">charge (Tk.): {{$student->studentDetails->charge}}</span> 
                and total <span style="font-weight:bold;">paid (Tk.): {{$student->payments_sum_amount}}</span>. 
                Our Observation of record shown that 
                <span style="font-weight:bold;"> total dues (Tk.): {{$student->studentDetails->charge - $student->payments_sum_amount}}</span> till date 
                <span>{{$date}}</span>.   
            @else
            Our Observation of record shown that he is a <span style="font-weight:bold;">non residential</span> student.
            @endif
        </div>
    </div>

    <div  style="margin-top:60px;">
        <table style="width:100%">
            <tbody>
                <tr>
                    <td></td>
                    <td width="25%" style="text-align: center; padding-bottom:5px;">
                        <img width="110" src="{{ public_path('img/signature.jpg')}}" alt="logo">
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td width="25%" style="border-top: 1px solid black; text-align: center;">
                        <div>Hall Authority</div>
                        <div>BSMR Hall, PUST</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div style="text-align: right; font-style: italic; font-size:13px; margin-top:30px;">
        <span>This certificate has been generated electrically</span>
    </div>
</body>
</html>